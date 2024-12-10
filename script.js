// Signup Form
document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      // Simulate signup (store in localStorage for now)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
  
  // Login Form
  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      // Simulate login (check in localStorage for now)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        alert("Login successful!");
        window.location.href = "upload_info.html";
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
  
  // Upload Information Form
  document.getElementById("upload-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const image = document.getElementById("image").files[0];
  
    try {
      // Read the image file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        const resume = {
          name,
          email,
          phone,
          education,
          experience,
          skills,
          image: imageData,
        };
  
        // Save resume data in localStorage
        const resumes = JSON.parse(localStorage.getItem("resumes")) || [];
        resumes.push(resume);
        localStorage.setItem("resumes", JSON.stringify(resumes));
        alert("Information uploaded successfully!");
      };
      reader.readAsDataURL(image);
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
  
  // Fetch and Display Resumes
  async function fetchResumes() {
    const resumesContainer = document.getElementById("resume-list");
    resumesContainer.innerHTML = ""; // Clear previous data
  
    try {
      const resumes = JSON.parse(localStorage.getItem("resumes")) || [];
      resumes.forEach((resume) => {
        const resumeHTML = `
          <div class="resume">
            <img src="${resume.image}" alt="Professional Image">
            <h3>${resume.name}</h3>
            <p><strong>Email:</strong> ${resume.email}</p>
            <p><strong>Phone:</strong> ${resume.phone}</p>
            <p><strong>Education:</strong> ${resume.education}</p>
            <p><strong>Experience:</strong> ${resume.experience}</p>
            <p><strong>Skills:</strong> ${resume.skills}</p>
          </div>
        `;
        resumesContainer.innerHTML += resumeHTML;
      });
    } catch (error) {
      alert("Error fetching resumes: " + error.message);
    }
  }
  
  // Call this function to load resumes
  fetchResumes();