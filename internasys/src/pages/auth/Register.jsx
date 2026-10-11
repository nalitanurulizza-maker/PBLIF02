import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";

import {
  GraduationCap,
  UserRound,
  UsersRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  ChartNoAxesCombined,
  IdCard,
} from "lucide-react";

function Register() {
  const [role, setRole] = useState("mahasiswa");

  const [form, setForm] = useState({
    nama: "",
    identitas: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !form.nama ||
      !form.identitas ||
      !form.email ||
      !form.password ||
      !form.konfirmasiPassword
    ) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    if (form.password !== form.konfirmasiPassword) {
      setError("Konfirmasi password tidak sesuai.");
      return;
    }

    setError("");

    alert(
      "Form registrasi valid. Penyimpanan akun menunggu integrasi backend."
    );
  };

  return (
    <div className="auth-container">

      {/* BAGIAN KIRI */}
      <div className="auth-left">

        <div className="auth-brand">
          <div className="brand-icon">
            <GraduationCap size={27} />
          </div>

          <div>
            <h2>InternaSys</h2>
            <span>Internship Management System</span>
          </div>
        </div>

        <div className="auth-hero">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            BERGABUNG DENGAN INTERNASYS
          </div>

          <h1>
            Mulai Perjalanan
            <br />
            Magangmu
            <br />
            <span>Bersama Kami.</span>
          </h1>

          <p>
            Buat akun InternaSys untuk mengakses
            layanan pendaftaran dan pendataan
            magang mahasiswa secara digital.
          </p>

          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">
                <FileCheck2 size={21} />
              </div>

              <div>
                <h4>Pendaftaran Online</h4>
                <p>
                  Proses pendaftaran lebih praktis
                  tanpa pencatatan manual.
                </p>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h4>Verifikasi Digital</h4>
                <p>
                  Pengajuan diperiksa oleh
                  koordinator magang.
                </p>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <ChartNoAxesCombined size={21} />
              </div>

              <div>
                <h4>Informasi Terpusat</h4>
                <p>
                  Data dan dokumen magang
                  tersimpan dalam satu sistem.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="auth-footer">
          © 2026 InternaSys. TIM PBLIF3-MA02.
        </div>

      </div>

      {/* BAGIAN KANAN */}
      <div className="auth-right">

        <div className="auth-card register-card">
          <Link to="/" className="back-home-link">
            ← Kembali ke Beranda
          </Link>

          <div className="mobile-brand">
            <GraduationCap size={28} />
            <span>InternaSys</span>
          </div>

          <div className="auth-heading">
            <div className="heading-label">
              PENDAFTARAN AKUN
            </div>

            <h2>Buat Akun Baru</h2>

            <p>
              Lengkapi informasi berikut untuk
              membuat akun InternaSys.
            </p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>

            {/* PILIH ROLE */}
            <div className="form-group">
              <label>Daftar Sebagai</label>

              <div className="role-selector">

                <button
                  type="button"
                  className={`role-option ${
                    role === "mahasiswa" ? "active" : ""
                  }`}
                  aria-pressed={role === "mahasiswa"}
                  onClick={() => {
                    setRole("mahasiswa");
                    setForm((prev) => ({
                      ...prev,
                      identitas: "",
                    }));
                  }}
                >
                  <GraduationCap size={24} />

                  <span>Mahasiswa</span>
                </button>

                <button
                  type="button"
                  className={`role-option ${
                    role === "koordinator" ? "active" : ""
                  }`}
                  aria-pressed={role === "koordinator"}
                  onClick={() => {
                    setRole("koordinator");
                    setForm((prev) => ({
                      ...prev,
                      identitas: "",
                    }));
                  }}
                >
                  <UsersRound size={24} />

                  <span>Koordinator Magang</span>
                </button>

              </div>
            </div>

            {/* NAMA */}
            <div className="form-group">
              <label htmlFor="register-nama">
                Nama Lengkap
              </label>

              <div className="input-wrapper">
                <UserRound size={19} />

                <input
                  id="register-nama"
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama lengkap"
                  value={form.nama}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            {/* IDENTITAS */}
            <div className="form-group">
              <label htmlFor="register-identitas">
                {role === "mahasiswa"
                  ? "Nomor Induk Mahasiswa (NIM)"
                  : "NIP / NIDN Koordinator"}
              </label>

              <div className="input-wrapper">
                <IdCard size={19} />

                <input
                  id="register-identitas"
                  type="text"
                  name="identitas"
                  placeholder={
                    role === "mahasiswa"
                      ? "Masukkan NIM"
                      : "Masukkan NIP / NIDN"
                  }
                  value={form.identitas}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="register-email">
                Alamat Email
              </label>

              <div className="input-wrapper">
                <Mail size={19} />

                <input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="Masukkan alamat email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="register-password">
                Password
              </label>

              <div className="input-wrapper">
                <LockKeyhole size={19} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Minimal 8 karakter"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={
                    showPassword
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* KONFIRMASI PASSWORD */}
            <div className="form-group">
              <label htmlFor="register-konfirmasi">
                Konfirmasi Password
              </label>

              <div className="input-wrapper">
                <LockKeyhole size={19} />

                <input
                  id="register-konfirmasi"
                  type={showPassword ? "text" : "password"}
                  name="konfirmasiPassword"
                  placeholder="Ulangi password"
                  value={form.konfirmasiPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            {role === "koordinator" && (
              <div className="role-notice">
                <ShieldCheck size={18} />

                <span>
                  Akun Koordinator Magang memerlukan
                  verifikasi pengelola sebelum dapat
                  digunakan untuk mengesahkan pengajuan.
                </span>
              </div>
            )}

            <button
              type="submit"
              className="auth-button"
            >
              Daftar Sekarang
              <ArrowRight size={19} />
            </button>

          </form>

          <div className="auth-divider">
            <span>Sudah memiliki akun?</span>
          </div>

          <Link
            to="/login"
            className="auth-secondary-button"
          >
            Masuk ke Akun
          </Link>

          <div className="auth-bottom">
            <ShieldCheck size={16} />
            <span>
              Sistem Informasi Pendaftaran dan Pendataan Magang
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;