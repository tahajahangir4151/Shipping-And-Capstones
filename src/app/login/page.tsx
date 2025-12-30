"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("Email and password are required");
      return;
    }
    setLoading(true);

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    console.log("Email:", email);
    console.log("Password:", password);

    setLoading(false);
    alert("Login successful");
    setEmail("");
    setPassword("");
    router.push("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eeeeee",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          width: "300px",
          borderRadius: "6px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#000" }}>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          id="input-email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            color: "#000",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          id="input-password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            color: "#000",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          id="login-btn"
          disabled={loading}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: loading ? "gray" : "blue",
            color: "#fff",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p
            style={{
              marginTop: "10px",
              color: "red",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
