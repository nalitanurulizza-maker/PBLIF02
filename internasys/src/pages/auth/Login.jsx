import { useState } from "react";
import "../../styles/Auth.css";
import { Link } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  GraduationCap,
  FileCheck2,
  ShieldCheck,
  ChartNoAxesCombined,
} from "lucide-react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    setError("");
    alert(
      "Tampilan login berhasil divalidasi. Autentikasi backend belum terhubung."
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
            SISTEM INFORMASI MAGANG
          </div>

          <h1>
            Langkah Awal
            <br />
            Menuju Masa
            <br />
            <span>Depan Profesional.</span>
          </h1>

          <p>
            Kelola proses pendaftaran, verifikasi,
            dan pendataan magang mahasiswa
            dalam satu platform yang mudah,
            cepat, dan terintegrasi.
          </p>

          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">
                <FileCheck2 size={21} />
              </div>

              <div>
                <h4>Pengajuan Lebih Praktis</h4>
                <p>
                  Daftar dan pantau pengajuan magang
                  secara digital.
                </p>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h4>Verifikasi Terstruktur</h4>
                <p>
                  Proses pemeriksaan dan pengesahan
                  oleh koordinator magang.
                </p>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <ChartNoAxesCombined size={21} />
              </div>

              <div>
                <h4>Pendataan Terintegrasi</h4>
                <p>
                  Informasi magang tersimpan
                  dan terkelola dengan baik.
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

        <div className="auth-card">
          <Link to="/" className="back-home-link">
             ← Kembali ke Beranda
          </Link>

          <div className="mobile-brand">
            <GraduationCap size={28} />
            <span>InternaSys</span>
          </div>

          <div className="auth-heading">
            <div className="heading-label">
              SELAMAT DATANG KEMBALI
            </div>

            <h2>Masuk ke Akun</h2>

            <p>
              Silakan masuk menggunakan akun
              InternaSys Anda untuk melanjutkan.
            </p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label htmlFor="login-email">
                Alamat Email
              </label>

              <div className="input-wrapper">
                <Mail size={19} />

                <input
                  id="login-email"
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

            <div className="form-group">
              <label htmlFor="login-password">
                Password
              </label>

              <div className="input-wrapper">
                <LockKeyhole size={19} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
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

            <div className="form-options">
              <span>
                Lupa password? Hubungi pengelola sistem.
              </span>
            </div>

            <button
              type="submit"
              className="auth-button"
            >
              Masuk
              <ArrowRight size={19} />
            </button>

          </form>

          <div className="auth-divider">
            <span>Belum memiliki akun?</span>
          </div>

          <Link
            to="/register"
            className="auth-secondary-button"
          >
            Daftar Akun Baru
          </Link>

          <div className="auth-bottom">
            <ShieldCheck size={16} />
            <span>
              Akses khusus Mahasiswa dan Koordinator Magang
            </span>
          </div>


        </div>
        
      </div>
    </div>
  );
}

export default Login;