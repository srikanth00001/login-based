import { useState } from "react";

const WhatsAppLogin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // track if OTP is sent

  const handleWhatsappLogin = async () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    try {
      const response = await fetch("https://2ed9-2405-201-e015-707b-75db-dd0d-957f-ff3d.ngrok-free.app/whatsapp/send-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: mobileNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Failed to send OTP.");
        return;
      }

      alert("OTP sent to your WhatsApp!");
      setOtpSent(true); // update to OTP screen
    } catch (error) {
      console.error("WhatsApp Login Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const response = await fetch("https://2ed9-2405-201-e015-707b-75db-dd0d-957f-ff3d.ngrok-free.app/whatsapp/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: mobileNumber, code: otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "OTP verification failed.");
        return;
      }

      alert("OTP verified successfully!");
      console.log("Login Success:", data);
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* WhatsApp field */}
      <input
        type="tel"
        placeholder={otpSent ? "Enter your OTP" : "Enter your mobile number"}
        required
        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none text-center"
        value={otpSent ? otp : mobileNumber}
        onChange={(e) => otpSent ? setOtp(e.target.value) : setMobileNumber(e.target.value)}
      />

      {/* Sign In Button */}
      <button
        className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 cursor-pointer"
        onClick={otpSent ? verifyOtp : handleWhatsappLogin}
      >
        {otpSent ? "Verify OTP" : "Login with WhatsApp"}
      </button>
    </div>
  );
};

export default WhatsAppLogin;
