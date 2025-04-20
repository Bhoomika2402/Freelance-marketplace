// Sample data for jobs
// Sample data for jobs
const jobsData = [
    { title: "UX Designer", company: "Google Drive", category: "Design", postType: "Junior", salary: "$6.7 - $12.5k /yr", datePosted: "1 day ago", icon: "fab fa-google-drive" },
    { title: "JavaScript Developer", company: "Google", category: "Web Design", postType: "Senior", salary: "$8.7 - $13.2k /yr", datePosted: "2 days ago", icon: "fab fa-google" },
    { title: "Product Developer", company: "Facebook", category: "App Development", postType: "Manager", salary: "$11 - $18.5k /yr", datePosted: "2 days ago", icon: "fab fa-facebook" },
    { title: "Programmer", company: "Github", category: "Programming", postType: "Junior", salary: "$60 - $11.5k /yr", datePosted: "3 days ago", icon: "fab fa-git-alt" },
    { title: "React.js Expert", company: "Youtube", category: "Web Design", postType: "VIP", salary: "$12.5 - $25.5k /yr", datePosted: "4 days ago", icon: "fab fa-youtube" },
    { title: "iOS Developer", company: "Apple", category: "App Development", postType: "Senior", salary: "$9 - $15k /yr", datePosted: "1 week ago", icon: "fab fa-apple" },
    { title: "Backend Developer", company: "Amazon", category: "Web Design", postType: "Junior", salary: "$7 - $12k /yr", datePosted: "1 week ago", icon: "fab fa-amazon" },
    { title: "Full Stack Developer", company: "Netflix", category: "Web Design", postType: "Manager", salary: "$13 - $20k /yr", datePosted: "1 week ago", icon: "fab fa-netflix" },
    { title: "Cloud Architect", company: "Microsoft", category: "App Development", postType: "VIP", salary: "$15 - $30k /yr", datePosted: "2 weeks ago", icon: "fab fa-microsoft" },
    { title: "UI/UX Designer", company: "Adobe", category: "Design", postType: "Senior", salary: "$10 - $18k /yr", datePosted: "2 weeks ago", icon: "fab fa-adobe" }
];

// Function to render jobs and send 
function renderJobs(filteredJobs = jobsData) {
    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = ''; // Clear previous results
  
    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job_card');
    
        jobCard.innerHTML = `
          <div class="job_details">
            <div class="img"><i class="${job.icon}"></i></div>
            <div class="text">
              <h2>${job.title}</h2>
              <span>${job.company} - ${job.postType} Post</span>
            </div>
          </div>
          <div class="job_salary">
            <h4>${job.salary}</h4>
            <p>${job.datePosted}</p>
          </div>
        `;
    
        jobContainer.appendChild(jobCard);
    });
}

// Initial render
renderJobs();



// Function to filter jobs based on search input and select filters
function filterJobs() {
    const searchTerm = document.getElementById('jobSearch').value.toLowerCase();
    const selectedCategory = document.getElementById('categorySelect').value;
    const selectedPostType = document.getElementById('filterSelect').value;
  
    const filteredJobs = jobsData.filter(job => {
        // Search filter
        const matchesSearch = job.title.toLowerCase().includes(searchTerm);
    
        // Category filter
        const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    
        // Post Type filter
        const matchesPostType = selectedPostType ? job.postType === selectedPostType : true;
    
        return matchesSearch && matchesCategory && matchesPostType;
    });
  
    renderJobs(filteredJobs); // Render the filtered jobs
}

// Initial render of all jobs
renderJobs();

// Attach the filter function to the input events
document.getElementById('jobSearch').addEventListener('keyup', filterJobs);
document.getElementById('categorySelect').addEventListener('change', filterJobs);
document.getElementById('filterSelect').addEventListener('change', filterJobs);
