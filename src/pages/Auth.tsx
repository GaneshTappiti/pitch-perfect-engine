import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/workspace");
      }
    });
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleSignUp = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container" id="container" style={{ position: "relative", overflow: "hidden", width: "768px", maxWidth: "100%", minHeight: "480px", borderRadius: "10px", boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" }}>
        <div className="form-container sign-up-container" style={{ position: "absolute", top: 0, height: "100%", transition: "all 0.6s ease-in-out", left: 0, width: "50%", opacity: isSignUp ? 1 : 0, zIndex: isSignUp ? 5 : 1 }}>
          <form action="#" style={{ backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 50px", height: "100%", textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold", margin: 0 }}>Create Account</h1>
            <div className="social-container" style={{ margin: "20px 0" }}>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span style={{ fontSize: "12px" }}>or use your email for registration</span>
            <input type="text" placeholder="Name" style={{ backgroundColor: "#eee", border: "none", padding: "12px 15px", margin: "8px 0", width: "100%" }} />
            <input type="email" placeholder="Email" style={{ backgroundColor: "#eee", border: "none", padding: "12px 15px", margin: "8px 0", width: "100%" }} />
            <input type="password" placeholder="Password" style={{ backgroundColor: "#eee", border: "none", padding: "12px 15px", margin: "8px 0", width: "100%" }} />
            <button onClick={handleSignUp} style={{ borderRadius: "20px", border: "1px solid #FF4B2B", backgroundColor: "#FF4B2B", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold", padding: "12px 45px", letterSpacing: "1px", textTransform: "uppercase", transition: "transform 80ms ease-in" }}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container" style={{ position: "absolute", top: 0, height: "100%", transition: "all 0.6s ease-in-out", left: 0, width: "50%", zIndex: 2 }}>
          <form action="#" style={{ backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 50px", height: "100%", textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold", margin: 0 }}>Sign in</h1>
            <div className="social-container" style={{ margin: "20px 0" }}>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social" style={{ border: "1px solid #DDDDDD", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", margin: "0 5px", height: "40px", width: "40px" }}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span style={{ fontSize: "12px" }}>or use your account</span>
            <input type="email" placeholder="Email" style={{ backgroundColor: "#eee", border: "none", padding: "12px 15px", margin: "8px 0", width: "100%" }} />
            <input type="password" placeholder="Password" style={{ backgroundColor: "#eee", border: "none", padding: "12px 15px", margin: "8px 0", width: "100%" }} />
            <a href="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0" }}>Forgot your password?</a>
            <button onClick={handleSignIn} style={{ borderRadius: "20px", border: "1px solid #FF4B2B", backgroundColor: "#FF4B2B", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold", padding: "12px 45px", letterSpacing: "1px", textTransform: "uppercase", transition: "transform 80ms ease-in" }}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container" style={{ position: "absolute", top: 0, left: "50%", width: "50%", height: "100%", overflow: "hidden", transition: "transform 0.6s ease-in-out", zIndex: 100 }}>
          <div className="overlay" style={{ background: "linear-gradient(to right, #FF4B2B, #FF416C)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0 0", color: "#FFFFFF", position: "relative", left: "-100%", height: "100%", width: "200%", transform: isSignUp ? "translateX(50%)" : "translateX(0)", transition: "transform 0.6s ease-in-out" }}>
            <div className="overlay-panel overlay-left" style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 40px", textAlign: "center", top: 0, height: "100%", width: "50%", transform: isSignUp ? "translateX(0)" : "translateX(-20%)", transition: "transform 0.6s ease-in-out" }}>
              <h1 style={{ fontWeight: "bold", margin: 0 }}>Welcome Back!</h1>
              <p style={{ fontSize: "14px", fontWeight: "100", lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsSignUp(false)} style={{ backgroundColor: "transparent", borderColor: "#FFFFFF", borderRadius: "20px", border: "1px solid #FFFFFF", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold", padding: "12px 45px", letterSpacing: "1px", textTransform: "uppercase", transition: "transform 80ms ease-in" }}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right" style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 40px", textAlign: "center", top: 0, height: "100%", width: "50%", transform: isSignUp ? "translateX(20%)" : "translateX(0)", transition: "transform 0.6s ease-in-out" }}>
              <h1 style={{ fontWeight: "bold", margin: 0 }}>Hello, Friend!</h1>
              <p style={{ fontSize: "14px", fontWeight: "100", lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => setIsSignUp(true)} style={{ backgroundColor: "transparent", borderColor: "#FFFFFF", borderRadius: "20px", border: "1px solid #FFFFFF", color: "#FFFFFF", fontSize: "12px", fontWeight: "bold", padding: "12px 45px", letterSpacing: "1px", textTransform: "uppercase", transition: "transform 80ms ease-in" }}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 