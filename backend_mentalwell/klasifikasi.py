import pickle
import pandas as pd
import requests
from sqlalchemy import create_engine
import mysql.connector


# Memuat model dari file pickle
with open('d:/MBKM/mentalwell/backend_mentalwell/mental_disorders.pkl', 'rb') as f:
    rf_model = pickle.load(f)

# Fungsi untuk mendapatkan data dari API
def get_api(api_url):
    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print("Gagal mengakses API. Kode status:", response.status_code)
            return None
    except requests.exceptions.RequestException as e:
        print("Terjadi kesalahan saat mengakses API:", e)
        return None

# URL API
api_url = "http://localhost:8080/api/jawaban-srq"

# Mendapatkan data dari API
api_data = get_api(api_url)

# Cek apakah data berhasil didapatkan
if api_data:
    for data in api_data:
        id_partisipan = data['id_partisipan']  # Simpan id_partisipan untuk mencetak keterangan
        # Buat DataFrame dari data API
        new_data_df = pd.DataFrame([data])

        # Ganti nilai 'None' dengan 0
        new_data_df = new_data_df.fillna(0)

        # Ubah tipe data menjadi integer
        new_data_df = new_data_df.astype(int)

        # Tambahkan kolom 'points' ke dalam data input
        new_data_df['points'] = new_data_df.drop(['id_jawaban', 'id_partisipan', 'points', 'mental_disorders', 'klasifikasi'], axis=1).sum(axis=1)

        # Lakukan prediksi dengan model
        predictions = rf_model.predict(new_data_df.drop(['id_jawaban', 'id_partisipan', 'klasifikasi', 'mental_disorders'], axis=1))

        # Simpan hasil prediksi ke dalam kolom 'mental_disorders'
        new_data_df['mental_disorders'] = predictions

        # Fungsi untuk mengklasifikasikan penyakit berdasarkan jawaban dominan
        def klasifikasi_penyakit(row):
            # Definisikan kriteria untuk setiap penyakit
            kriteria_depresi = ['appetite_poor', 'sleep_badly', 'thinking_clearly', 'unhappy', 'cry', 
                                'difficult_make_decisions', 'unable_useful', 'lost_interest', 'worthless_person', 
                                'ending_life', 'tired', 'uncomfortable_stomach']
            kriteria_cemas = ['easily_frightened', 'hands_shake', 'nervous', 'worthless_person']
            kriteria_somatoform = ['headaches', 'digestion_poor', 'easily_tired']
            kriteria_neurotik = ['sleep_badly', 'thinking_clearly', 'work_suffering', 'tired', 'uncomfortable_stomach']

            # Hitung jumlah jawaban yang memenuhi kriteria untuk setiap penyakit
            count_depresi = sum(row[kriteria] == 1 for kriteria in kriteria_depresi)
            count_cemas = sum(row[kriteria] == 1 for kriteria in kriteria_cemas)
            count_somatoform = sum(row[kriteria] == 1 for kriteria in kriteria_somatoform)
            count_neurotik = sum(row[kriteria] == 1 for kriteria in kriteria_neurotik)

            # Tentukan penyakit berdasarkan jumlah jawaban dominan
            max_count = max(count_depresi, count_cemas, count_somatoform, count_neurotik)
            if max_count == count_depresi:
                return 'Depresi'
            elif max_count == count_cemas:
                return 'Cemas'
            elif max_count == count_somatoform:
                return 'Somatoform'
            elif max_count == count_neurotik:
                return 'Neurotik'

        # Prediksi klasifikasi penyakit dan simpan ke dalam kolom 'klasifikasi'
        new_data_df['klasifikasi'] = new_data_df.apply(klasifikasi_penyakit, axis=1)

        # Tampilkan hasil prediksi
        print("Hasil Prediksi untuk Partisipan dengan id_partisipan:", id_partisipan)
        print(new_data_df)

        # Simpan hasil prediksi ke dalam database
        engine = create_engine('mysql+mysqlconnector://root:@localhost/mentalwell')
        new_data_df[['id_partisipan', 'points', 'mental_disorders', 'klasifikasi']].to_sql('hasil_prediksi', con=engine, if_exists='append', index=False)

        print("Data telah disimpan ke dalam database.")

