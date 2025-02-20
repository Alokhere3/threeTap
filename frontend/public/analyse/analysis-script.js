const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        slidesOffsetBefore: 50,
        spaceBetween: 0,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

function redirectToReact() {
    // Redirect to the React app's settings route
    window.location.href = "/setting"; // Adjust the path if necessary
}


// Initial data for the main categories
let mainData = [
    {
        x: ['IIT', 'NIT', 'IIIT', 'GFTI', 'Private'], // Main categories
        y: [17760, 24229, 8546, 9402, 31000], // Example values
        name: 'Institutions',
        type: 'bar',
        marker: { color: '#B27964' } // Single color for all bars
    }
];

// Layout for the initial chart
let mainLayout = {
    title: 'Institutions Overview',
    xaxis: { title: 'Institutions' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Render the initial chart
Plotly.newPlot('chart', mainData, mainLayout);


// Zoomed-in data for IIT (subcategories)
const iitData = [
    {
        x: ['IIT Bhubaneswar','IIT Bombay','IIT Mandi','IIT Delhi','IIT Indore','IIT Kharagpur','IIT Hyderabad','IIT Jodhpur','IIT Kanpur','IIT Madras','IIT Gandhinagar','IIT Patna','IIT Roorkee','IIT Dhanbad','IIT Ropar','IIT BHU','IIT Guwahati','IIT Bhilai','IIT Goa','IIT Palakkad','IIT Tirupati','IIT Jammu','IIT Dharwad'],
        y: [496,1368,520,1209,480,1919,595,600,1210,1128,400,817,1353,1125,430,1589,962,283,157,200,254,280,385],
        name: 'IIT Seat',
        type: 'bar',
        marker: { color: '#01B985' } // Orange
    }
];
// Zoomed-in layout for IIT
const iitLayout = {
    title: 'IIT Breakdown',
    //xaxis: { title: '' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};
// Zoomed-in data for NIT (subcategories)
const nitData = [
    {
        x: ['NIT Jalandhar','NIT Jaipur','NIT Bhopal','NIT Allahabad','NIT Agartala','NIT Calicut','NIT Delhi','NIT Durgapur','NIT Goa','NIT Hamirpur','NIT Karnataka','NIT Meghalaya','NIT Nagaland','NIT Patna','NIT Puducherry','NIT Raipur','NIT Sikkim','NIT ArunachalPradesh','NIT Jamshedpur','NIT Kurukshetra','NIT Manipur','NIT Mizoram','NIT Rourkela','NIT Silchar','NIT Srinagar','NIT Tiruchirappalli','NIT Uttrakhand','NIT Warangal','NIT Surat','NIT Nagpur','NIT AndhraPradesh','IIEST Shibpur'], // 
        y: [1106,888,1203,1134,1084,1240,374,969,224,944,958,165,200,941,275,1159,190,160,751,1147,226,190,1065,903,899,1038,200,1049,1370,933,480,764], //
        name: 'NIT Seat',
        type: 'bar',
        marker: { color: '#01B985' } // Green
    }
];
// Zoomed-in layout for NIT
const nitLayout = {
    title: 'NIT Breakdown',
    //xaxis: { title: 'NIT Colleges' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};
// Zoomed-in data for IIIT (subcategories)
const iiitData = [
    {
        x: ['IIIT Gwalior','IIIT Rajasthan','IIIT Guwahati','IIIT West Bengal','IIIT Haryana','IIIT Himachal Pradesh','IIIT Chittoor','IIIT Gujrat','IIIT Allahabad','IIIT Kancheepuram','IIIT Jabalpur','IIIT Manipur','IIIT Tiruchirappalli','IIIT Lucknow','IIIT Dharwad','IIIT Andhra Pradesh','IIIT Kottayam','IIIT Ranchi','IIIT Nagpur','IIIT Pune','IIIT Bhagalpur','IIIT Bhopal','IIIT Surat','IIIT Agartala','IIIT Karnataka','IIIT Vadodara International Campus Diu (IIITVICD)'], // 
        y: [295,330,254,193,240,294,437,235,439,559,552,374,150,240,402,327,556,270,637,345,344,495,180,70,220,108],
        name: 'IIIT Seat',
        type: 'bar',
        marker: { color: '#01B985' } // Green
    }
];
// Zoomed-in layout for IIIT
const iiitLayout = {
    title: 'IIIT Breakdown',
    //xaxis: { title: 'IIIT Colleges' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};
// Zoomed-in data for GFTI (subcategories)
const gftiData = [
    {
        x: ["Assam University","Birla Institute of Technology, Mesra, Ranchi",'Gurukula Kangri Vishwavidyalaya, Haridwar',"Indian Institute of Carpet Technology, Bhadohi","Institute of Infrastructure, Technology, Research and Management-Ahmedabad","School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur","J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad","National Institute of Electronics and Information Technology, Aurangabad (Maharashtra)","National Institute of Advanced Manufacturing Technology, Ranchi","Sant Longowal Institute of Engineering and Technology","Mizoram University, Aizawl","School of Engineering, Tezpur University, Napaam, Tezpur","School of Planning & Architecture, Bhopal","School of Planning & Architecture, New Delhi","School of Planning & Architecture: Vijayawada","Shri Mata Vaishno Devi University, Katra, Jammu & Kashmir","International Institute of Information Technology, Naya Raipur","University of Hyderabad","Punjab Engineering College, Chandigarh","Jawaharlal Nehru University, Delhi","International Institute of Information Technology, Bhubaneswar","Central institute of Technology Kokrajar, Assam","Puducherry Technological University, Puducherry","Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal","Central University of Rajasthan, Rajasthan","National Institute of Food Technology Entrepreneurship and Management, Kundli","National Institute of Food Technology Entrepreneurship and Management, Thanjavur","North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh","Indian Institute of Handloom Technology(IIHT), Varanasi","Chhattisgarh Swami Vivekanada Technical University, Bhilai (CSVTU Bhilai)","Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar","North-Eastern Hill University, Shillong","Central University of Jammu","Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University)","Central University of Haryana","Birla Institute of Technology, Deoghar Off-Campus","Birla Institute of Technology, Patna Off-Campus","Indian Institute of Handloom Technology, Salem","Gati Shakti Vishwavidyalaya, Vadodara","CU Jharkhand"],
        y: [180,1284,575,33,156,711,86,60,276,498,96,149,132,177,132,270,95,110,800,126,223,24,317,187,90,100,90,16,33,120,66,80,210,360,210,266,426,30,368,240],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#01B985' } // Orange
    }
];
// Zoomed-in layout for GFTI
const gftiLayout = {
    title: 'GFTI Breakdown',
    //xaxis: { title: 'GFTI Colleges' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};
// Zoomed-in data for Private (subcategories)
const PrivateData = [
    {
        x: ["VIT Vellore","SRM Institute of Science and Technology","BITS Pilani","Amrita School of Engineering Coimbatore","Institute of Technical Education and Research","Thapar University","Amity University Noida",'Chandigarh University (CU)','KL University, Guntur',"Kalasalingam University Tamil Nadu","KIIT School of Civil Engineering", "SASTRA University", "UPES School of Health Sciences and Technology", "SSN College of Engineering", "International Institute of Information Technology, Hyderabad", "Birla Institute of Technology, Mesra", "LPU - Lovely Professional University", "Graphic Era Deemed to be University", "Saveetha Institute of Medical and technical Sciences", "Manipal School from Information Science, Manipal", "PSGCT Coimbatore", "Banasthali Vidyapith", "SKCET- Sri Krishna College of Engineering of Technology", "RV college of Engineering"],
        y: [11,13,20,23,26,29,30,32,35,36,37,38,42,46,47,48,50,52,53,56,67,78,83,99],
        name: 'Private Seat',
        type: 'bar',
        marker: { color: '#01B985' } // Orange
    }
];
// Zoomed-in layout for Private
const PrivateLayout = {
    title: 'Private Breakdown',
    //xaxis: { title: 'Private Colleges' },
    yaxis: { title: 'NIRF Rank' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};



//IIT BHUBANESWAR
// Zoomed-in data for IIT Bhubaneswar (branches)
const iitBhubaneswarData = [
    {
        x: ['Civil Engineering', 'Computer Science and Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering','Engineering Physics','Mechanical Engineering','Metallurgical and Materials Engineering'],
        y: [110, 82, 81, 54, 20, 109, 40],
        name: 'IIT Bhubaneswar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Bhubaneswar
const iitBhubaneswarLayout = {
    title: 'IIT Bhubaneswar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT BOMABY
// Zoomed-in data for IIT Bombay (branches)
const iitBombayData = [
    {
        x: ['Aerospace Engineering', 'Chemical Engineering', 'Civil Engineering','Environmental Science and Engineering','Computer Science and Engineering','Electrical Engineering','Engineering Physics','Mechanical Engineering','Metallurgical and Materials Engineering','Industrial Engineering and Operations Research','Energy Engineering','Chemistry','Economics','BS in Mathematics','Electrical Engineering(Dual Degree)'],
        y: [81, 133, 150, 46, 199, 113, 58, 204, 113, 40, 48, 35, 40, 18, 90],
        name: 'IIT BOMBAY Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Bbombay
const iitBombayLayout = {
    title: 'IIT BOMBAY Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT MANDI
// Zoomed-in data for IIT Mandi (branches)
const iitMandiData = [
    {
        x: ['Civil Engineering','B.Tech in General Engineering','Computer Science and Engineering','Electrical Engineering','Engineering Physics','B.Tech in Materials Science and Engineering','B.Tech in Microelectronics & VLSI','B.Tech in Mathematics and Computing','Mechanical Engineering','Bio Engineering','Data Science and Engineering','BS in Chemical Sciences'],
        y: [50, 30, 80, 70, 30, 30, 30,30,60, 30,50,30],
        name: 'IIT Mandi Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Mandi
const iitMandiLayout = {
    title: 'IIT Mandi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Delhi
// Zoomed-in data for IIT Delhi (branches)
const iitDelhiData = [
    {
        x: ['Biotechnology and Biochemical Engineering', 'Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electrical Engineering (Power and Automation)','Engineering Physics','Mathematics and Computing','Mechanical Engineering','Production and Industrial Engineering','Textile Technology','Engineering and Computational Mechanics','Materials Engineering','Energy Engineering','Chemical Engineering(Dual Degree)','Computer Science and Engineering(Dual Degree)','Mathematics and Computing(Dual Degree)'],
        y: [72,75,110,99,120,65,63,89,95,89,96,40,40,40,46,37,33],
        name: 'IIT Delhi Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Delhi
const iitDelhiLayout = {
    title: 'IIT Delhi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Indore
// Zoomed-in data for IIT Indore (branches)
const iitIndoreData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Engineering Physics','Space Sciences and Engineering','Mathematics and Computing','Mechanical Engineering','Metallurgical Engineering and Materials Science'],
        y: [40,53,82,85,20,20,40,87,53],
        name: 'IIT Indore Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Indore
const iitIndoreLayout = {
    title: 'IIT Indore Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Kharagpur
// Zoomed-in data for IIT Kharagpur (branches)
const iitKharagpurData = [
    {
        x: ['Aerospace Engineering','Agricultural and Food Engineering','Biotechnology and Biochemical Engineering','Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electronics and Electrical Communication Engineering','Instrumentation Engineering','Manufacturing Science and Engineering','Mechanical Engineering','Metallurgical and Materials Engineering','Mining Engineering','Ocean Engineering and Naval Architecture','Industrial and Systems Engineering','Artificial Intelligence','Chemistry','Economics','Physics','Mathematics and Computing','Applied Geology','Exploration Geophysics','Architecture (5 Years,BArch)'],
        y: [70,93,70,115,119,140,113,150,44,66,172,93,113,80,72,50,45,59,49,69,52,45,37],
        name: 'IIT Kharagpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Kharagpur
const iitKharagpurLayout = {
    title: 'IIT Kharagpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Hyderabad
// Zoomed-in data for IIT Hyderabad (branches)
const iitHyderabadData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computational Engineering','Industrial Chemistry','Electrical Engineering (IC Design and Technology)','Computer Science and Engineering','Electrical Engineering','Engineering Physics','Engineering Science','Mathematics and Computing','Mechanical Engineering','Materials Science and Metallurgical Engineering','Artificial Intelligence','Biomedical Engineering','Biotechnology and Bioinformatics'],
        y: [45,60,25,25,25,65,65,35,40,25,65,35,35,25,25],
        name: 'IIT Hyderabad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Hyderabad
const iitHyderabadLayout = {
    title: 'IIT Hyderabad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Jodhpur
// Zoomed-in data for IIT Jodhpur (branches)
const iitJodhpurData = [
    {
        x: ['Chemical Engineering','Computer Science and Engineering','Electrical Engineering','Mechanical Engineering','Civil and Infrastructure Engineering','Bio Engineering','Artificial Intelligence and Data Science','Materials Engineering','Physics with Specialization','Chemistry with Specialization'],
        y: [50,80,90,90,60,50,70,50,30,30],
        name: 'IIT Jodhpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Jodhpur
const iitJodhpurLayout = {
    title: 'IIT Jodhpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Kanpur
// Zoomed-in data for IIT Kanpur (branches)
const iitKanpurData = [
    {
        x: ['Aerospace Engineering','Biological Sciences and Bioengineering','Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Materials Science and Engineering','Mechanical Engineering','Chemistry','Economics','Mathematics and Scientific Computing','Physics','Earth Sciences','Statistics and Data Science'],
        y: [69,53,104,148,129,192,85,149,49,52,64,45,43,28],
        name: 'IIT Kanpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Kanpur
const iitKanpurLayout = {
    title: 'IIT Kanpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Madras
// Zoomed-in data for IIT Madras (branches)
const iitMadrasData = [
    {
        x: ['Aerospace Engineering','Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Engineering Physics','Biological Engineering','Mechanical Engineering','Metallurgical and Materials Engineering','Artificial Intelligence and Data Analytics','Naval Architecture and Ocean Engineering','Biological Science','Aerospace Engineering','Engineering Design','Physics'],
        y: [55,117,127,87,154,42,41,180,59,50,78,41,10,74,13],
        name: 'IIT Madras Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Madras
const iitMadrasLayout = {
    title: 'IIT Madras Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Gandhinagar
// Zoomed-in data for IIT Gandhinagar (branches)
const iitGandhinagarData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Mechanical Engineering','Integrated Circuit Design & Technology','Artificial Intelligence','Materials Engineering','Computer Science and Engineering','Electrical Engineering','Mechanical Engineering'],
        y: [50,40,50,50,50,30,30,40,20,20,20],
        name: 'IIT Gandhinagar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Gandhinagar
const iitGandhinagarLayout = {
    title: 'IIT Gandhinagar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Patna
// Zoomed-in data for IIT Patna (branches)
const iitPatnaData = [
    {
        x: ['Chemical Engineering','Chemical Science and Technology','Civil Engineering','Computer Science and Engineering','Electronics and Communication Engineering','Engineering Physics','Mathematics and Computing','Mechanical Engineering','Metallurgical and Materials Engineering','Electrical and Electronics Engineering','Artificial Intelligence and Data Science','Economics','B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems','B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya)','B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya)','B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya)','B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya)','B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya)','B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya)','B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya)','B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya)','B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya)','B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya)','B.Tech (Mechanical Engineering) - MBA (IIM Mumbai)','B. Tech in CE. - M. Tech. in Geotechnical Engineering','B. Tech in CE. - M. Tech. in Structural Engineering','B. Tech. (CSE) and M.Tech in CSE','B. Tech. (ECE) -M. Tech. in VLSI','B. Tech. (EEE)-M. Tech. in (Power &. Control)','B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing)','B. Tech. (ME) - M. Tech. in Mechatronics','BS in Economics with MBA (IIM Bodh Gaya)'],
        y: [70,40,70,86,50,40,50,86,46,50,50,24,10,5,6,5,5,6,5,6,6,5,5,15,10,10,10,10,10,10,10,6],
        name: 'IIT Patna Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Patna
const iitPatnaLayout = {
    title: 'IIT Patna Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Roorkee
// Zoomed-in data for IIT Roorkee (branches)
const iitRoorkeeData = [
    {
        x: ['Chemical Engineering','Civil Engineering,Computer Science and Engineering','Electrical Engineering','Electronics and Communication Engineering','Engineering Physics','Mechanical Engineering','Metallurgical and Materials Engineering','Production and Industrial Engineering','Data Science and Artificial Intelligence','Biosciences and Bioengineering','Energy Engineering','Architecture','Geological Technology','Geophysical Technology','Physics,Mathematics & Computing','Chemical Sciences,Economics'],
        y: [117,154,109,165,109,50,150,82,58,40,46,20,30,38,41,27,49,35,33],
        name: 'IIT Roorkee Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Roorkee
const iitRoorkeeLayout = {
    title: 'IIT Roorkee Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Dhanbad
// Zoomed-in data for IIT Dhanbad (branches)
const iitDhanbadData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electronics and Communication Engineering','Engineering Physics','Environmental Engineering','Mathematics and Computing','Mechanical Engineering','Mining Engineering','Mining Machinery Engineering','Petroleum Engineering','Mineral and Metallurgical Engineering','Applied Geology','Applied Geophysics'],
        y: [55,69,139,123,124,31,48,55,131,117,56,90,45,21,21],
        name: 'IIT Dhanbad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Dhanbad
const iitDhanbadLayout = {
    title: 'IIT Dhanbad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Ropar
// Zoomed-in data for IIT Ropar (branches)
const iitRoparData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Engineering PhysicsArtificial Intelligence and Data Engineering','Mathematics and Computing','Mechanical Engineering','Metallurgical and Materials Engineering'],
        y: [35,35,84,84,25,20,36,83,28],
        name: 'IIT Ropar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Ropar
const iitRoparLayout = {
    title: 'IIT Ropar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Varanasi
// Zoomed-in data for IIT Varanasi (branches)
const iitVaranasiData = [
    {
        x: ['Ceramic Engineering','Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Electronics Engineering','Mechanical Engineering','Metallurgical Engineering','Mining Engineering','Pharmaceutical Engineering & Technology','Architecture','Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology','Bioengineering with M.Tech in Biomedical Technology','Ceramic Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering with M.Tech. in Power Electronics','Materials Science and Technology','Mechanical Engineering','Metallurgical Engineering','Mining Engineering','Mathematics and Computing','Engineering Physics','Industrial Chemistry','Pharmaceutical Engineering & Technology'],
        y: [75,156,120,99,115,133,148,106,131,80,26,25,21,20,30,34,30,28,32,28,30,52,28,21,21],
        name: 'IIT Varanasi Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Varanasi
const iitVaranasiLayout = {
    title: 'IIT Varanasi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIT Guwahati
// Zoomed-in data for IIT Guwahati (branches)
const iitGuwahatiData = [
    {
        x: ['Chemical Engineering','Chemical Science and Technology','Civil Engineering','Computer Science and Engineering','Electronics and Communication Engineering','Electronics and Electrical Engineering','Engineering Physics','Mathematics and Computing','Mechanical Engineering','Data Science and Artificial Intelligence','Biosciences and Bioengineering','Energy Engineering'],
        y: [97,65,117,114,104,62,68,72,119,40,84,20],
        name: 'IIT Guwahati Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Guwahati
const iitGuwahatiLayout = {
    title: 'IIT Guwahati Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Bhilai
// Zoomed-in data for IIT Bhilai (branches)
const iitBhilaiData = [
    {
        x: ['Computer Science and Engineering','Electrical Engineering','Electronics and Communication Engineering','Mechanical Engineering','Materials Science and Metallurgical Engineering','Mechatronics Engineering','Data Science and Artificial Intelligence'],
        y: [55,54,40,54,20,20,40],
        name: 'IIT Bhilai Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Bhilai
const iitBhilaiLayout = {
    title: 'IIT Bhilai Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Goa
// Zoomed-in data for IIT Goa (branches)
const iitGoaData = [
    {
        x: ['Computer Science and Engineering','Electrical Engineering','Mathematics and Computing','Mechanical Engineering'],
        y: [40,43,29,45],
        name: 'IIT Goa Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Goa
const iitGoaLayout = {
    title: 'IIT Goa Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Palakkad
// Zoomed-in data for IIT Palakkad (branches)
const iitPalakkadData = [
    {
        x: ['Civil Engineering,Computer Science and Engineering','Electrical Engineering','Mechanical Engineering','Data Science and Engineering'],
        y: [40,40,40,40,40],
        name: 'IIT Palakkad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Palakkad
const iitPalakkadLayout = {
    title: 'IIT Palakkad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Tirupati
// Zoomed-in data for IIT Tirupati (branches)
const iitTirupatiData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Engineering Physics','Mechanical Engineering'],
        y: [39,39,53,60,10,53],
        name: 'IIT Tirupati Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Tirupati
const iitTirupatiLayout = {
    title: 'IIT Tirupati Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Jammu
// Zoomed-in data for IIT Jammu (branches)
const iitJammuData = [
    {
        x: ['Chemical Engineering','Civil Engineering','Computer Science and Engineering','Electrical Engineering','Mathematics and Computing','Mechanical Engineering','Materials Engineering'],
        y: [40,40,40,40,40,40,40],
        name: 'IIT Jammu Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Jammu
const iitJammuLayout = {
    title: 'IIT Jammu Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIT Dharwad
// Zoomed-in data for IIT Dharwad (branches)
const iitDharwadData = [
    {
        x: ['Chemical and Biochemical Engineering','Computer Science and Engineering','Electronics and Communication Engineering','Engineering Physics','Mathematics and Computing','Mechanical Engineering','Civil and Infrastructure Engineering','Electrical and Electronics Engineering','Interdisciplinary Sciences'],
        y: [30,65,45,30,30,65,30,30,60],
        name: 'IIT Dharwad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIT Dharwad
const iitDharwadLayout = {
    title: 'IIT Dharwad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Jalandhar
// Zoomed-in data for NIT Jalandhar (branches)
const nitJalandharData = [
    {
        x: ['Bio Technology(punjab)','Bio Technology(other than punjab)','Chemical Engineering(punjab)','Chemical Engineering(other than punjab)','Civil Engineering(punjab)','Civil Engineering(other than punjab)','Electronics and VLSI Engineering(punjab)','Electronics and VLSI Engineering(other than punjab)','Computer Science and Engineering(punjab)','Computer Science and Engineering(other than punjab)','Electrical Engineering(punjab)','Electrical Engineering(other than punjab)','Electronics and Communication Engineering(punjab)','Electronics and Communication Engineering(other than punjab)','Mathematics and Computing(punjab)','Mathematics and Computing(other than punjab)','Mechanical Engineering(punjab)','Mechanical Engineering(other than punjab)','Textile Technology(punjab)','Textile Technology(other than punjab)','Information Technology(punjab)','Information Technology(other than punjab)','Instrumentation and Control Engineering(punjab)','Instrumentation and Control Engineering(other than punjab)','Industrial and Production Engineering(punjab)','Industrial and Production Engineering(other than punjab)','Data Science and Engineering(punjab)','Data Science and Engineering(other than punjab)'],
        y: [25,25,37,37,42,43,15,15,79,79,30,30,43,43,20,20,55,55,39,39,60,60,50,50,38,37,20,20],
        name: 'NIT Jalandhar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Jalandhar
const nitJalandharLayout = {
    title: 'NIT Jalandhar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//NIT Jaipur
// Zoomed-in data for NIT Jaipur (branches)
const nitJaipurData = [
    {
        x: ['Chemical Engineering(Rajasthan)','Chemical Engineering(other than Rajasthan)','Civil Engineering(Rajasthan)','Civil Engineering(other than Rajasthan)','Computer Science and Engineering(Rajasthan)','Computer Science and Engineering(other than Rajasthan)','Electrical Engineering(Rajasthan)','Electrical Engineering(other than Rajasthan)','Electronics and Communication Engineering(Rajasthan)','Electronics and Communication Engineering(other than Rajasthan)','Artificial Intelligence and Data Engineering(Rajasthan)','Artificial Intelligence and Data Engineering(other than Rajasthan)','Mechanical Engineering(Rajasthan)','Mechanical Engineering(other than Rajasthan)','Metallurgical and Materials Engineering(Rajasthan)','Metallurgical and Materials Engineering(other than Rajasthan)','Architecture(Rajasthan)','Architecture(other than Rajasthan)'],
        y: [58,57,57,58,58,59,58,59,59,58,20,20,59,57,37,37,38,39],
        name: 'NIT Jaipur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Jaipur
const nitJaipurLayout = {
    title: 'NIT Jaipur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Bhopal
// Zoomed-in data for NIT Bhopal (branches)
const nitBhopalData = [
    {
        x: ['Chemical Engineering(Madhya Pradesh)','Chemical Engineering(other than Madhya Pradesh)','Civil Engineering(Madhya Pradesh)','Civil Engineering(other than Madhya Pradesh)','Computer Science and Engineering(Madhya Pradesh)','Computer Science and Engineering(other than Madhya Pradesh)','Electrical Engineering(Madhya Pradesh)','Electrical Engineering(other than Madhya Pradesh)','Electronics and Communication Engineering(Madhya Pradesh)','Electronics and Communication Engineering(other than Madhya Pradesh)','Mechanical Engineering(Madhya Pradesh)','Mechanical Engineering(other than Madhya Pradesh)','Materials Science and Metallurgical Engineering(Madhya Pradesh)','Materials Science and Metallurgical Engineering(other than Madhya Pradesh)','Planning(Madhya Pradesh)','Planning(other than Madhya Pradesh)','Architecture(Madhya Pradesh)','Architecture(other than Madhya Pradesh)','Mathematics and Data Science(Madhya Pradesh)','Mathematics and Data Science(other than Madhya Pradesh)'],
        y: [39,39,57,56,114,115,68,68,87,86,107,107,39,39,26,26,50,50,15,15],
        name: 'NIT Bhopal Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Bhopal
const nitBhopalLayout = {
    title: 'NIT Bhopal Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//NIT Allahabad
// Zoomed-in data for NIT Allahabad (branches)
const nitAllahabadData = [
    {
        x: ['Bio Technology(Uttar Pradesh)','Bio Technology(other than Uttar Pradesh)','Chemical Engineering(Uttar Pradesh)','Chemical Engineering(other than Uttar Pradesh)','Civil Engineering(Uttar Pradesh)','Civil Engineering(other than Uttar Pradesh)','Computer Science and Engineering(Uttar Pradesh)','Computer Science and Engineering(other than Uttar Pradesh)','Electrical Engineering(Uttar Pradesh)','Electrical Engineering(other than Uttar Pradesh)','Electronics and Communication Engineering(Uttar Pradesh)','Electronics and Communication Engineering(other than Uttar Pradesh)','Mechanical Engineering(Uttar Pradesh)','Mechanical Engineering(other than Uttar Pradesh)','Materials Engineering(Uttar Pradesh)','Materials Engineering(other than Uttar Pradesh)','Production and Industrial Engineering(Uttar Pradesh)','Production and Industrial Engineering(other than Uttar Pradesh)','Engineering and Computational Mechanics(Uttar Pradesh)','Engineering and Computational Mechanics(other than Uttar Pradesh)'],
        y: [30,30,30,30,60,61,163,162,51,52,91,91,82,81,15,15,30,30,15,15],
        name: 'NIT Allahabad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Allahabad
const nitAllahabadLayout = {
    title: 'NIT Allahabad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Agartala
// Zoomed-in data for NIT Agartala (branches)
const nitAgartalaData = [
    {
        x: ['Biotechnology and Biochemical Engineering(Tripura)','Biotechnology and Biochemical Engineering(other than Tripura)','Chemical Engineering(Tripura)','Chemical Engineering(other than Tripura)','Civil Engineering(Tripura)','Civil Engineering(other than Tripura)','Computer Science and Engineering(Tripura)','Computer Science and Engineering(other than Tripura)','Electrical Engineering(Tripura)','Electrical Engineering(other than Tripura)','Electronics and Communication Engineering(Tripura)','Electronics and Communication Engineering(other than Tripura)','Mechanical Engineering(Tripura)','Mechanical Engineering(other than Tripura)','Electronics and Instrumentation Engineering(Tripura)','Electronics and Instrumentation Engineering(other than Tripura)','Production Engineering(Tripura)','Production Engineering(other than Tripura)','Computational Mathematics(Tripura)','Computational Mathematics(other than Tripura)','Engineering Physics(Tripura)','Engineering Physics(other than Tripura)','Physics(Tripura)','Physics(other than Tripura)','Chemistry(Tripura)','Chemistry(other than Tripura)','Mathematics & Computing(Tripura)','Mathematics & Computing(other than Tripura)'],
        y: [25,25,37,38,59,59,75,75,62,63,64,64,62,63,37,38,56,57,12,13,12,13,12,13,12,13,12,13],
        name: 'NIT Agartala Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Agartala
const nitAgartalaLayout = {
    title: 'NIT Agartala Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Calicut
// Zoomed-in data for NIT Calicut (branches)
const nitCalicutData = [
    {
        x: ['Bio Technology(KERALA)','Bio Technology(other than KERALA)','Chemical Engineering(KERALA)','Chemical Engineering(other than KERALA)','Civil Engineering(KERALA)','Civil Engineering(other than KERALA)','Computer Science and Engineering(KERALA)','Computer Science and Engineering(other than KERALA)','Electronics and Communication Engineering(KERALA)','Electronics and Communication Engineering(other than KERALA)','Engineering Physics(KERALA)','Engineering Physics(other than KERALA)','Materials Science and Engineering(KERALA)','Materials Science and Engineering(other than KERALA)','Mechanical Engineering(KERALA)','Mechanical Engineering(other than KERALA)','Electrical and Electronics Engineering(KERALA)','Electrical and Electronics Engineering(other than KERALA)','Production Engineering(KERALA)','Production Engineering(other than KERALA)','Architecture(KERALA)','Architecture(other than KERALA',],
        y: [18,19,58,58,86,86,90,89,87,86,18,19,15,15,103,103,86,86,30,29,29,30],
        name: 'NIT Calicut Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Calicut
const nitCalicutLayout = {
    title: 'NIT Calicut Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Delhi
// Zoomed-in data for NIT Delhi (branches)
const nitDelhiData = [
    {
        x: ['Aerospace Engineering(DELHI (NCT) CHANDIGARH (UT))','Aerospace Engineering(other than DELHI (NCT) CHANDIGARH (UT))','Civil Engineering(DELHI (NCT) CHANDIGARH (UT))','Civil Engineering(other than DELHI (NCT) CHANDIGARH (UT))','Computer Science and Engineering(DELHI (NCT) CHANDIGARH (UT))','Computer Science and Engineering(other than DELHI (NCT) CHANDIGARH (UT))','Electrical Engineering(DELHI (NCT) CHANDIGARH (UT))','Electrical Engineering(other than DELHI (NCT) CHANDIGARH (UT))','Electronics and Communication Engineering(DELHI (NCT) CHANDIGARH (UT))','Electronics and Communication Engineering(other than DELHI (NCT) CHANDIGARH (UT))','VLSI Design and Technology(DELHI (NCT) CHANDIGARH (UT))','VLSI Design and Technology(other than DELHI (NCT) CHANDIGARH (UT))','Mechanical Engineering(DELHI (NCT) CHANDIGARH (UT))','Mechanical Engineering(other than DELHI (NCT) CHANDIGARH (UT))','Artificial Intelligence and Data Science(DELHI (NCT) CHANDIGARH (UT))','Artificial Intelligence and Data Science(other than DELHI (NCT) CHANDIGARH (UT))',],
        y: [12,12,13,12,60,60,30,30,30,30,13,12,20,20,10,10],
        name: 'NIT Delhi Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Delhi
const nitDelhiLayout = {
    title: 'NIT Delhi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Durgapur
// Zoomed-in data for NIT Durgapur (branches)
const nitDurgapurData = [
    {
        x: ['Bio Technology(West Bengal)','Bio Technology(other than West Bengal)','Chemical Engineering(West Bengal)','Chemical Engineering(other than West Bengal)','Civil Engineering(West Bengal)','Civil Engineering(other than West Bengal)','Computer Science and Engineering(West Bengal)','Computer Science and Engineering(other than West Bengal)','Electrical Engineering(West Bengal)','Electrical Engineering(other than West Bengal)','Electronics and Communication Engineering(West Bengal)','Electronics and Communication Engineering(other than West Bengal)','B.Tech in Mathematics and Computing(West Bengal)','B.Tech in Mathematics and Computing(other than West Bengal)','Mechanical Engineering(West Bengal)','Mechanical Engineering(other than West Bengal)','Metallurgical and Materials Engineering(West Bengal)','Metallurgical and Materials Engineering(other than West Bengal)','Chemical Engineering DUAL(West Bengal)','Chemical Engineering DUAL(other than West Bengal)','Biotechnology DUAL(West Bengal)','Biotechnology DUAL(other than West Bengal)','Chemistry(West Bengal)','Chemistry(other than West Bengal',],
        y: [38,37,37,38,40,40,94,93,50,50,49,48,30,30,94,93,37,38,4,3,4,3],
        name: 'NIT Durgapur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Durgapur
const nitDurgapurLayout = {
    title: 'NIT Durgapur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Goa
// Zoomed-in data for NIT Goa (branches)
const nitGoaData = [
    {
        x: ['Civil Engineering(GOA)','Civil Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Civil Engineering(other than GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Computer Science and Engineering(GOA)','Computer Science and Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Computer Science and Engineering(other than GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electronics and Communication Engineering(GOA)','Electronics and Communication Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electronics and Communication Engineering(other than GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electronics and Communication Engineering(GOA)','Electronics and Communication Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electronics and Communication Engineering(other than GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Mechanical Engineering(GOA)','Mechanical Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Mechanical Engineering(other than GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electrical and Electronics Engineering(GOA)','Electrical and Electronics Engineering(DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))','Electrical and Electronics Engineering(GOA DAMAN & DIU (UT) DADRA & NAGAR HAVELI (UT) LAKSHADWEEP (UT))',],
        y: [14,4,19,20,5,25,20,5,25,15,4,18,20,5,25],
        name: 'NIT Goa Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Goa
const nitGoaLayout = {
    title: 'NIT Goa Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//NIT Hamirpur
// Zoomed-in data for NIT Hamirpur (branches)
const nitHamirpurData = [
    {
        x: ['Chemical Engineering(Tripura)','Chemical Engineering(other than Tripura)','Civil Engineering(Tripura)','Civil Engineering(other than Tripura)','Computer Science and Engineering(Tripura)','Computer Science and Engineering(other than Tripura)','Electrical Engineering(Tripura)','Electrical Engineering(other than Tripura)','Electronics and Communication Engineering(Tripura)','Electronics and Communication Engineering(other than Tripura)','Engineering Physics(Tripura)','Engineering Physics(other than Tripura)','Materials Science and Engineering(Tripura)','Materials Science and Engineering(other than Tripura)','Mathematics and Computing(Tripura)','Mathematics and Computing(other than Tripura)','Mechanical Engineering(Tripura)','Mechanical Engineering(other than Tripura)','Mechanical EngineeringDUAL(Tripura)','Mechanical EngineeringDUAL(other than Tripura)','Architecture(Tripura)','Architecture(other than Tripura)','Computer Science and EngineeringDUAL(Tripura)','Computer Science and EngineeringDUAL(other than Tripura)','Electronics and Communication Engineering(Tripura)','Electronics and Communication Engineering(other than Tripura)'],
        y: [38,38,62,61,62,62,62,63,59,58,25,25,20,20,25,25,62,63,29,29,14,14,14,14],
        name: 'NIT Hamirpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Hamirpur
const nitHamirpurLayout = {
    title: 'NIT Hamirpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Karnataka
// Zoomed-in data for NIT Karnataka (branches)
const nitKarnatakaData = [
    {
        x: ['Chemical Engineering(Karnataka)','Chemical Engineering(other than Karnataka)','Civil Engineering(Karnataka)','Civil Engineering(other than Karnataka)','Computational and Data Science(Karnataka)','Computational and Data Science(other than Karnataka)','Computer Science and Engineering(Karnataka)','Computer Science and Engineering(other than Karnataka)','Electronics and Communication Engineering(Karnataka)','Electronics and Communication Engineering(other than Karnataka)','Mechanical Engineering(Karnataka)','Mechanical Engineering(other than Karnataka)','Metallurgical and Materials Engineering(Karnataka)','Metallurgical and Materials Engineering(other than Karnataka)','Mining Engineering(Karnataka)','Mining Engineering(other than Karnataka)','Electrical and Electronics Engineering(Karnataka)','Electrical and Electronics Engineering(other than Karnataka)','Information Technology(Karnataka)','Information Technology(other than Karnataka)','Artificial Intelligence(Karnataka)','Artificial Intelligence(other than Karnataka)'],
        y: [29,29,58,57,15,15,57,58,58,58,87,87,30,29,29,30,58,58,38,38,20,20],
        name: 'NIT Karnataka Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Karnataka
const nitKarnatakaLayout = {
    title: 'NIT Karnataka Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Meghalaya
// Zoomed-in data for NIT Meghalaya (branches)
const nitMeghalayaData = [
    {
        x: ['Civil Engineering(Meghalaya)','Civil Engineering(other than Meghalaya)','Computer Science and Engineering(Meghalaya)','Computer Science and Engineering(other than Meghalaya)','Electronics and Communication Engineering(Meghalaya)','Electronics and Communication Engineering(other than Meghalaya)','Mechanical Engineering(Meghalaya)','Mechanical Engineering(other than Meghalaya)','Electrical and Electronics Engineering(Meghalaya)','Electrical and Electronics Engineering(other than Meghalaya'],
        y: [17,16,16,17,16,17,17,16,16,17],
        name: 'NIT Meghalaya Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Meghalaya
const nitMeghalayaLayout = {
    title: 'NIT Meghalaya Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//NIT Nagaland
// Zoomed-in data for NIT Nagaland (branches)
const nitNagalandData = [
    {
        x: ['Civil Engineering(Nagaland)','Civil Engineering(other than Nagaland)','Computer Science and Engineering(Nagaland)','Computer Science and Engineering(other than Nagaland)','Electronics and Communication Engineering(Nagaland)','Electronics and Communication Engineering(other than Nagaland)','Mechanical Engineering(Nagaland)','Mechanical Engineering(other than Nagaland)','Electronics and Instrumentation Engineering(Nagaland)','Electronics and Instrumentation Engineering(other than Nagaland','Electrical and Electronics Engineering(Nagaland)','Electrical and Electronics Engineering(other than Nagaland'],
        y: [15,18,15,18,15,19,15,19,15,18,15,18],
        name: 'NIT Nagaland Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Nagaland
const nitNagalandLayout = {
    title: 'NIT Nagaland Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Patna
// Zoomed-in data for NIT Patna (branches)
const nitPatnaData = [
    {
        x: ['Civil Engineering(Bihar)','Civil Engineering(other than Bihar)','Computer Science and Engineering(Bihar)','Computer Science and Engineering(other than Bihar)','Electrical Engineering(Bihar)','Electrical Engineering(other than Bihar)','Electronics and Communication Engineering(Bihar)','Electronics and Communication Engineering(other than Bihar)','Mechatronics and Automation Engineering(Bihar)','Mechatronics and Automation Engineering(other than Bihar)','Mechanical Engineering(Bihar)','Mechanical Engineering(other than Bihar)','Architecture(Bihar)','Architecture(other than Bihar)','Computer Science and Engineering with Specialization in Data Science Dual Degree(Bihar)','Computer Science and Engineering with Specialization in Data Science Dual Degree(other than Bihar)','Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design(Bihar)','Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design(other than Bihar)','Electrical Engineering with Specialization In Power System Engineering Dual Degree(Bihar)','Electrical Engineering with Specialization In Power System Engineering Dual Degree(other than Bihar)','Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering Dual Degree(Bihar)','Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering Dual Degree(other than Bihar)','Civil Engineering with Specialization in Construction Technology and Management(Bihar)','Civil Engineering with Specialization in Construction Technology and Management(other than Bihar)','Material Science and Engineering Dual Degree(Bihar)','Material Science and Engineering Dual Degree(other than Bihar)','Mathematics and Computing Technology Dual Degree(Bihar)','Mathematics and Computing Technology Dual Degree(other than Bihar)','Chemical Technology Dual Degree(Bihar)','Chemical Technology Dual Degree(other than Bihar)'],
        y: [60,60,100,99,60,60,79,79,13,13,60,60,23,22,12,11,11,11,11,11,12,11,12,11,5,5,5,5,5,5,5,5],
        name: 'NIT Patna Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Patna
const nitPatnaLayout = {
    title: 'NIT Patna Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Puducherry
// Zoomed-in data for NIT Puducherry (branches)
const nitPuducherryData = [
    {
        x: ['Civil Engineering(PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Civil Engineering(other than PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Computer Science and Engineering(PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Computer Science and Engineering(other than PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Electronics and Communication Engineering(PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Electronics and Communication Engineering(other than PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Mechanical Engineering(PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Mechanical Engineering(other than PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Electrical and Electronics Engineering(PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT))','Electrical and Electronics Engineering(other than PUDUCHERRY (UT) ANDAMAN & NICOBAR ISLANDS (UT)'],
        y: [22,23,30,30,30,30,30,25,25,30,30],
        name: 'NIT Puducherry Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Puducherry
const nitPuducherryLayout = {
    title: 'NIT Puducherry Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Raipur
// Zoomed-in data for NIT Raipur (branches)
const nitRaipurData = [
    {
        x: ['Bio Technology(Chhattisgarh)','Bio Technology(other than Chhattisgarh)','Chemical Engineering(Chhattisgarh)','Chemical Engineering(other than Chhattisgarh)','Civil Engineering(Chhattisgarh)','Civil Engineering(other than Chhattisgarh)','Computer Science and Engineering(Chhattisgarh)','Computer Science and Engineering(other than Chhattisgarh)','Electrical Engineering(Chhattisgarh)','Electrical Engineering(other than Chhattisgarh)','Electronics and Communication Engineering(Chhattisgarh)','Electronics and Communication Engineering(other than Chhattisgarh)','Mechanical Engineering(Chhattisgarh)','Mechanical Engineering(other than Chhattisgarh)','Metallurgical and Materials Engineering(Chhattisgarh)','Metallurgical and Materials Engineering(other than Chhattisgarh','Mining Engineering(Chhattisgarh)','Mining Engineering(other than Chhattisgarh)','Information Technology(Chhattisgarh)','Information Technology(other than Chhattisgarh)','Bio Medical Engineering(Chhattisgarh)','Bio Medical Engineering(other than Chhattisgarh)','Architecture(Chhattisgarh)','Architecture(other than Chhattisgarh)'],
        y: [40,39,39,40,49,48,57,57,57,58,57,57,58,57,58,57,48,49,57,57,40,40,20,20],
        name: 'NIT Raipur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Raipur
const nitRaipurLayout = {
    title: 'NIT Raipur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Sikkim
// Zoomed-in data for NIT Sikkim (branches)
const nitSikkimData = [
    {
        x: ['Civil Engineering(Sikkim)','Civil Engineering(other than Sikkim)','Artificial Intelligence and Machine Learning(Sikkim)','Artificial Intelligence and Machine Learning(other than Sikkim)','Computer Science and Engineering(Sikkim)','Computer Science and Engineering(other than Sikkim)','Electronics and Communication Engineering(Sikkim)','Electronics and Communication Engineering(other than Sikkim)','Mechanical Engineering(Sikkim)','Mechanical Engineering(other than Sikkim)','Electrical and Electronics Engineering(Sikkim)','Electrical and Electronics Engineering(other than Sikkim)'],
        y: [15,115,15,15,20,20,15,15,15,15,15,15],
        name: 'NIT Sikkim Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Sikkim
const nitSikkimLayout = {
    title: 'NIT Sikkim Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT ArunachalPradesh
// Zoomed-in data for NIT ArunachalPradesh (branches)
const nitArunachalPradeshData = [
    {
        x: ['Civil Engineering(Arunachal Pradesh)','Civil Engineering(other than Arunachal Pradesh)','Computer Science and Engineering(Arunachal Pradesh)','Computer Science and Engineering(other than Arunachal Pradesh)','Electrical Engineering(Arunachal Pradesh)','Electrical Engineering(other than Arunachal Pradesh)','Electronics and Communication Engineering(Arunachal Pradesh)','Electronics and Communication Engineering(other than Arunachal Pradesh)','Mechanical Engineering(Arunachal Pradesh)','Mechanical Engineering(other than Arunachal Pradesh)'],
        y: [16,16,16,16,16,16,16,16,16],
        name: 'NIT ArunachalPradesh Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT ArunachalPradesh
const nitArunachalPradeshLayout = {
    title: 'NIT ArunachalPradesh Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Jamshedpur
// Zoomed-in data for NIT Jamshedpur (branches)
const nitJamshedpurData = [
    {
        x: ['Civil Engineering(JHARKHAND)','Civil Engineering(other than JHARKHAND)','Computer Science and Engineering(JHARKHAND)','Computer Science and Engineering(other than JHARKHAND)','Electrical Engineering(JHARKHAND)','Electrical Engineering(other than JHARKHAND)','Electronics and Communication Engineering(JHARKHAND)','Electronics and Communication Engineering(other than JHARKHAND)','Mechanical Engineering(JHARKHAND)','Mechanical Engineering(other than JHARKHAND)','Metallurgical and Materials Engineering(JHARKHAND)','Metallurgical and Materials Engineering(other than JHARKHAND)','Production and Industrial Engineering(JHARKHAND)','Production and Industrial Engineering(other than JHARKHAND)','Engineering and Computational Mechanics(JHARKHAND)','Engineering and Computational Mechanics(other than JHARKHAND)'],
        y: [50,49,58,58,57,57,58,58,58,57,49,50,31,31,15,15],
        name: 'NIT Jamshedpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Jamshedpur
const nitJamshedpurLayout = {
    title: 'NIT Jamshedpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Kurukshetra
// Zoomed-in data for NIT Kurukshetra (branches)
const nitKurukshetraData = [
    {
        x: ['Civil Engineering(HARYANA)','Civil Engineering(other than HARYANA)','Artificial Intelligence and Machine Learning(HARYANA)','Artificial Intelligence and Machine Learning(other than HARYANA)','Computer Science and Engineering(HARYANA)','Computer Science and Engineering(other than HARYANA)','Electrical Engineering(HARYANA)','Electrical Engineering(other than HARYANA)','Electronics and Communication Engineering(HARYANA)','Electronics and Communication Engineering(other than HARYANA)','Industrial Internet of Things(HARYANA)','Industrial Internet of Things(other than HARYANA)','Mathematics and Computing(HARYANA)','Mathematics and Computing(other than HARYANA)','Mechanical Engineering(HARYANA)','Mechanical Engineering(other than HARYANA)','ROBOTICS & AUTOMATION(HARYANA)','ROBOTICS & AUTOMATION(other than HARYANA)','Microelectronics & VLSI Engineering(HARYANA)','Microelectronics & VLSI Engineering(other than HARYANA)','SUSTAINABLE ENERGY TECHNOLOGIES(HARYANA)','SUSTAINABLE ENERGY TECHNOLOGIES(other than HARYANA)','Production and Industrial Engineering(HARYANA)','Production and Industrial Engineering(other than HARYANA)','Information Technology(HARYANA)','Information Technology(other than HARYANA)','Artificial Intelligence and Data Science(HARYANA)','Artificial Intelligence and Data Science(other than HARYANA)','Architecture and Planning(HARYANA)','Architecture and Planning(other than HARYANA)','Civil Engineering Dual(HARYANA)','Civil Engineering Dual(other than HARYANA)','Computer Science and Engineering Dual(HARYANA)','Computer Science and Engineering Dual(other than HARYANA)','Electrical Engineering Dual(HARYANA)','Electrical Engineering Dual(other than HARYANA)','Mechanical Engineering Dual(HARYANA)','Mechanical Engineering Dual(other than HARYANA)','Electronics and Communication Engineering Dual(HARYANA)','Electronics and Communication Engineering Dual(other than HARYANA',],
        y: [54,54,30,30,54,54,54,54,54,54,30,30,29,28,54,54,25,25,30,30,30,30,20,20,30,30,30,30,20,20,6,6,6,6,6,6,6,6,6,6,6],
        name: 'NIT Kurukshetra Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Kurukshetra
const nitKurukshetraLayout = {
    title: 'NIT Kurukshetra Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Manipur
// Zoomed-in data for NIT Manipur (branches)
const nitManipurData = [
    {
        x: ['Civil Engineering(Manipur)','Civil Engineering(other than Manipur)','Computer Science and Engineering(Manipur)','Computer Science and Engineering(other than Manipur)','Electrical Engineering(Manipur)','Electrical Engineering(other than Manipur)','Electronics and Communication Engineering(Manipur)','Electronics and Communication Engineering(other than Manipur)','Mechanical Engineering(Manipur)','Mechanical Engineering(other than Manipur)'],
        y: [19,19,37,37,19,19,19,19,19,19],
        name: 'NIT Manipur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Manipur
const nitManipurLayout = {
    title: 'NIT Manipur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Mizoram
// Zoomed-in data for NIT Mizoram (branches)
const nitMizoramData = [
    {
        x: ['Civil Engineering(Mizoram)','Civil Engineering(other than Mizoram)','Computer Science and Engineering(Mizoram)','Computer Science and Engineering(other than Mizoram)','Electrical Engineering(Mizoram)','Electrical Engineering(other than Mizoram)','Electronics and Communication Engineering(Mizoram)','Electronics and Communication Engineering(other than Mizoram)','Mathematics and Computing(Mizoram)','Mathematics and Computing(other than Mizoram)','Mechanical Engineering(Mizoram)','Mechanical Engineering(other than Mizoram)'],
        y: [18,18,18,18,18,18,18,18,5,5,18,18],
        name: 'NIT Mizoram Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Mizoram
const nitMizoramLayout = {
    title: 'NIT Mizoram Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Rourkela
// Zoomed-in data for NIT Rourkela (branches)
const nitRourkelaData = [
    {
        x: ['Bio Technology(Odisha)','Bio Technology(other than Odisha)','Ceramic Engineering(Odisha)','Ceramic Engineering(other than Odisha)','Chemical Engineering(Odisha)','Chemical Engineering(other than Odisha)','Civil Engineering(Odisha)','Civil Engineering(other than Odisha)','Computer Science and Engineering(Odisha)','Computer Science and Engineering(other than Odisha)','Electrical Engineering(Odisha)','Electrical Engineering(other than Odisha)','Electronics and Communication Engineering(Odisha)','Electronics and Communication Engineering(other than Odisha)','Mechanical Engineering(Odisha)','Mechanical Engineering(other than Odisha)','Metallurgical and Materials Engineering(Odisha)','Metallurgical and Materials Engineering(other than Odisha','Mining Engineering(Odisha)','Mining Engineering(other than Odisha)','Electronics and Instrumentation Engineering(Odisha)','Electronics and Instrumentation Engineering(other than Odisha)','Bio Medical Engineering(Odisha)','Bio Medical Engineering(other than Odisha)','Industrial Design(Odisha)','Industrial Design(other than Odisha)','Food Process Engineering(Odisha)','Food Process Engineering(other than Odisha)','Artificial Intelligence(Odisha)','Artificial Intelligence(other than Odisha)','Architecture(Odisha)','Architecture(other than Odisha)','Chemical Engineering Dual(Odisha)','Chemical Engineering Dual(other than Odisha)','Metallurgical and Materials Engineering Dual(Odisha)','Metallurgical and Materials Engineering Dual(other than Odisha)','Mining Engineering Dual(Odisha)','Mining Engineering Dual(other than Odisha)','Ceramic Engineering and M.Tech Industrial Ceramic Dual(Odisha)','Ceramic Engineering and M.Tech Industrial Ceramic Dual(other than Odisha)','Chemistry Dual(Odisha)','Chemistry Dual(other than Odisha)','Physics(Odisha)','Physics(other than Odisha)','Mathematics (5 Years, Integrated Master of Science)(Odisha)','Mathematics (5 Years, Integrated Master of Science)(other than Odisha)','Life Science (5 Years, Integrated Master of Science)(Odisha)','Life Science (5 Years, Integrated Master of Science)(other than Odisha)'],
        y: [17,18,20,20,32,31,36,36,56,57,57,56,28,28,57,56,30,31,21,22,28,28,17,18,14,14,15,15,23,22,10,10,6,6,6,7,6,6,7,6,11,11,13,12,12,13,10,10],
        name: 'NIT Rourkela Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Rourkela
const nitRourkelaLayout = {
    title: 'NIT Rourkela Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Silchar
// Zoomed-in data for NIT Silchar (branches)
const nitSilcharData = [
    {
        x: ['Civil Engineering(Assam)','Civil Engineering(other than Assam)','Computer Science and Engineering(Assam)','Computer Science and Engineering(other than Assam)','Electrical Engineering(Assam)','Electrical Engineering(other than Assam)','Electronics and Communication Engineering(Assam)','Electronics and Communication Engineering(other than Assam)','Mechanical Engineering(Assam)','Mechanical Engineering(other than Assam)','Electronics and Instrumentation Engineering(Assam)','Electronics and Instrumentation Engineering(other than Assam)'],
        y: [79,78,81,80,81,81,81,81,80,81,50,50],
        name: 'NIT Silchar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Silchar
const nitSilcharLayout = {
    title: 'NIT Silchar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Srinagar
// Zoomed-in data for NIT Srinagar (branches)
const nitSrinagarData = [
    {
        x: ['Chemical Engineering(JK JAMMU & KASHMIR (UT))','Chemical Engineering(LA LADAKH (UT))','Chemical Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Civil Engineering(JK JAMMU & KASHMIR (UT))','Civil Engineering(LA LADAKH (UT))','Civil Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Computer Science and Engineering(JK JAMMU & KASHMIR (UT))','Computer Science and Engineering(LA LADAKH (UT))','Computer Science and Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Electrical Engineering(JK JAMMU & KASHMIR (UT))','Electrical Engineering(LA LADAKH (UT))','Electrical Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Electronics and Communication Engineering(JK JAMMU & KASHMIR (UT))','Electronics and Communication Engineering(LA LADAKH (UT))','Electronics and Communication Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Mechanical Engineering(JK JAMMU & KASHMIR (UT))','Mechanical Engineering(LA LADAKH (UT))','Mechanical Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))','Metallurgical and Materials Engineering(JK JAMMU & KASHMIR (UT))','Metallurgical and Materials Engineering(LA LADAKH (UT))','Metallurgical and Materials Engineering(other than JAMMU & KASHMIR (UT) LADAKH (UT))'],
        y: [50,2,51,87,5,91,41,2,41,54,3,56,50,3,53,55,3,59,51,2,53],
        name: 'NIT Srinagar Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Srinagar
const nitSrinagarLayout = {
    title: 'NIT Srinagar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Tiruchirappalli
// Zoomed-in data for NIT Tiruchirappalli (branches)
const nitTiruchirappalliData = [
    {
        x: ['Chemical Engineering(Tamil Nadu)','Chemical Engineering(other than Tamil Nadu)','Civil Engineering(Tamil Nadu)','Civil Engineering(other than Tamil Nadu)','Computer Science and Engineering(Tamil Nadu)','Computer Science and Engineering(other than Tamil Nadu)','Electronics and Communication Engineering(Tamil Nadu)','Electronics and Communication Engineering(other than Tamil Nadu)','Mechanical Engineering(Tamil Nadu)','Mechanical Engineering(other than Tamil Nadu)','Metallurgical and Materials Engineering(Tamil Nadu)','Metallurgical and Materials Engineering(other than Tamil Nadu)','Electrical and Electronics Engineering(Tamil Nadu)','Electrical and Electronics Engineering(other than Tamil Nadu)','Production Engineering(Tamil Nadu)','Production Engineering(other than Tamil Nadu)','Instrumentation and Control Engineering(Tamil Nadu)','Instrumentation and Control Engineering(other than Tamil Nadu)','Architecture(Tamil Nadu)','Architecture(other than Tamil Nadu)'],
        y: [40,39,59,59,60,59,58,59,59,59,40,39,58,58,59,59,58,59,29,28],
        name: 'NIT Tiruchirappalli Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Tiruchirappalli
const nitTiruchirappalliLayout = {
    title: 'NIT Tiruchirappalli Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Uttrakhand
// Zoomed-in data for NIT Uttrakhand (branches)
const nitUttrakhandData = [
    {
        x: ['Civil Engineering(Uttrakhand)','Civil Engineering(other than Uttrakhand)','Computer Science and Engineering(Uttrakhand)','Computer Science and Engineering(other than Uttrakhand)','Electronics and Communication Engineering(Uttrakhand)','Electronics and Communication Engineering(other than Uttrakhand)','Mechanical Engineering(Uttrakhand)','Mechanical Engineering(other than Uttrakhand)','Electrical and Electronics Engineering(Uttrakhand)','Electrical and Electronics Engineering(other than Uttrakhand)'],
        y: [18,18,26,26,20,20,18,18,18,18],
        name: 'NIT Uttrakhand Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Uttrakhand
const nitUttrakhandLayout = {
    title: 'NIT Uttrakhand Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Warangal
// Zoomed-in data for NIT Warangal (branches)
const nitWarangalData = [
    {
        x: ['Bio Technology(Telangana)','Bio Technology(other than Telangana)','Chemical Engineering(Telangana)','Chemical Engineering(other than Telangana)','Civil Engineering(Telangana)','Civil Engineering(other than Telangana)','Electronics and Communication Engineering (VLSI Design and Technology)(Telangana)','Electronics and Communication Engineering (VLSI Design and Technology)(other than Telangana)','Computer Science and Engineering(Telangana)','Computer Science and Engineering(other than Telangana)','Electronics and Communication Engineering(Telangana)','Electronics and Communication Engineering(other than Telangana)','Mathematics and Computing(Telangana)','Mathematics and Computing(other than Telangana)','Mechanical Engineering(Telangana)','Mechanical Engineering(other than Telangana)','Metallurgical and Materials Engineering(Telangana)','Metallurgical and Materials Engineering(other than Telangana)','Computer Science and Engineering ( Artificial Intelligence & Data Science)(Telangana)','Computer Science and Engineering ( Artificial Intelligence & Data Science)(other than Telangana)','Electrical and Electronics Engineering(Telangana)','Electrical and Electronics Engineering(other than Telangana)','Chemistry(Telangana)','Chemistry(other than Telangana)','Physics(Telangana)','Physics(other than Telangana)','Electrical and Mathematics(Telangana)','Electrical and Mathematics(other than Telangana)'],
        y: [36,36,55,55,55,55,20,20,68,67,50,50,15,15,65,65,36,36,30,30,65,65,10,10,10,10,10,10],
        name: 'NIT Warangal Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Warangal
const nitWarangalLayout = {
    title: 'NIT Warangal Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Surat
// Zoomed-in data for NIT Surat (branches)
const nitSuratData = [
    {
        x: ['Chemical Engineering(Gujarat)','Chemical Engineering(other than Gujarat)','Civil Engineering(Gujarat)','Civil Engineering(other than Gujarat)','Industrial Chemistry(Gujarat)','Industrial Chemistry(other than Gujarat)','Electronics and VLSI Engineering(Gujarat)','Electronics and VLSI Engineering(other than Gujarat)','Computer Science and Engineering(Gujarat)','Computer Science and Engineering(other than Gujarat)','Electrical Engineering(Gujarat)','Electrical Engineering(other than Gujarat)','Electronics and Communication Engineering(Gujarat)','Electronics and Communication Engineering(other than Gujarat)','Engineering Physics(Gujarat)','Engineering Physics(other than Gujarat)','Mathematics and Computing(Gujarat)','Mathematics and Computing(other than Gujarat)','Mechanical Engineering(Gujarat)','Mechanical Engineering(other than Gujarat)','Artificial Intelligence (Gujarat)','Artificial Intelligence (other than Gujarat)','Chemistry(Gujarat)','Chemistry(other than Gujarat)','Physics (5 Years, Integrated Master of Science)(Gujarat)','Physics (5 Years, Integrated Master of Science)(other than Gujarat)','Mathematics (5 Years, Integrated Master of Science)(Gujarat)','Mathematics (5 Years, Integrated Master of Science)(other than Gujarat)','Artificial Intelligence (5 Years, Integrated B. Tech. and M. Tech.)(Gujarat)','Artificial Intelligence (5 Years, Integrated B. Tech. and M. Tech.)(other than Gujarat)',],
        y: [65,65,65,65,15,15,30,30,65,65,65,65,70,70,15,15,15,15,130,130,60,60,25,25,25,25,25,25,15,15],
        name: 'NIT Surat Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Surat
const nitSuratLayout = {
    title: 'NIT Surat Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Nagpur
// Zoomed-in data for NIT Nagpur (branches)
const nitNagpurData = [
    {
        x: ['Chemical Engineering(Maharashtra)','Chemical Engineering(other than Maharashtra)','Civil Engineering(Maharashtra)','Civil Engineering(other than Maharashtra)','Computer Science and Engineering(Maharashtra)','Computer Science and Engineering(other than Maharashtra)','Electronics and Communication Engineering(Maharashtra)','Electronics and Communication Engineering(other than Maharashtra)','Mechanical Engineering(Maharashtra)','Mechanical Engineering(other than Maharashtra)','Metallurgical and Materials Engineering(Maharashtra)','Metallurgical and Materials Engineering(other than Maharashtra)','Mining Engineering(Maharashtra)','Mining Engineering(other than Maharashtra)','Electrical and Electronics Engineering(Maharashtra)','Electrical and Electronics Engineering(other than Maharashtra)','Architecture (5 Years, Bachelor of Architecture)(Maharashtra)','Architecture (5 Years, Bachelor of Architecture)(other than Maharashtra)','Physics(Maharashtra)'],
        y: [57,58,57,58,58,57,58,57,58,57,57,58,25,25,58,57,39,39],
        name: 'NIT Nagpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Nagpur
const nitNagpurLayout = {
    title: 'NIT Nagpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT AndhraPradesh
// Zoomed-in data for NIT Andhra Pradesh (branches)
const nitAndhraPradeshData = [
    {
        x: ['Bio Technology(Andhra Pradesh)','Bio Technology(other than Andhra Pradesh)','Chemical Engineering(Andhra Pradesh)','Chemical Engineering(other than Andhra Pradesh)','Civil Engineering(Andhra Pradesh)','Civil Engineering(other than Andhra Pradesh)','Computer Science and Engineering(Andhra Pradesh)','Computer Science and Engineering(other than Andhra Pradesh)','Electronics and Communication Engineering(Andhra Pradesh)','Electronics and Communication Engineering(other than Andhra Pradesh)','Mechanical Engineering(Andhra Pradesh)','Mechanical Engineering(other than Andhra Pradesh)','Metallurgical and Materials Engineering(Andhra Pradesh)','Metallurgical and Materials Engineering(other than Andhra Pradesh)','Electrical and Electronics Engineering(Andhra Pradesh)','Electrical and Electronics Engineering(other than Andhra Pradesh)'],
        y: [15,15,15,15,30,30,45,45,45,45,30,3,15,15,45,45],
        name: 'NIT AndhraPradesh Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT AndhraPradesh
const nitAndhraPradeshLayout = {
    title: 'NIT AndhraPradesh Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//NIT Shibpur
// Zoomed-in data for NIT Shibpur (branches)
const nitShibpurData = [
    {
        x: ['Aerospace Engineering(Maharashtra)','Aerospace Engineering(other than Maharashtra)','Civil Engineering(Maharashtra)','Civil Engineering(other than Maharashtra)','Computer Science and Engineering(Maharashtra)','Computer Science and Engineering(other than Maharashtra)','Electrical Engineering(Maharashtra)','Electrical Engineering(other than Maharashtra)','Mechanical Engineering(Maharashtra)','Mechanical Engineering(other than Maharashtra)','Mining Engineering(Maharashtra)','Mining Engineering(other than Maharashtra)','Information Technology(Maharashtra)','Information Technology(other than Maharashtra)','Electronics and Telecommunication Engineering(Maharashtra)','Electronics and Telecommunication Engineering(other than Maharashtra)','Metallurgy and Materials Engineering(Maharashtra)','Metallurgy and Materials Engineering(other than Maharashtra)','Architecture (Maharashtra)','Architecture (other than Maharashtra)'],
        y: [24,24,73,73,48,48,48,48,48,48,24,24,48,48,33,33,24,24,12,12],
        name: 'NIT Shibpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for NIT Shibpur
const nitShibpurLayout = {
    title: 'NIT Shibpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Gwalior
// Zoomed-in data for IIIT Gwalior (branches)
const iiitGwaliorData = [
    {
        x: ['Computer Science and Engineering','Mathematics and Scientific Computing','Electrical and Electronics Engineering','Integrated B. Tech.(IT) and M. Tech (IT) (5 Years, Integrated B. Tech. and M. Tech.)','ntegrated B. Tech.(IT) and MBA (5 Years, Integrated B. Tech. and MBA)'],
        y: [75,30,40,90,60],
        name: 'IIIT Gwalior Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Gwalior
const iiitGwaliorLayout = {
    title: 'IIIT Gwalior Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Rajasthan
// Zoomed-in data for IIIT Rajasthan (branches)
const iiitRajasthanData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering ','Artificial Intelligence and Data Engineering'],
        y: [180,90,60],
        name: 'IIIT Rajasthan Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Rajasthan
const iiitRajasthanLayout = {
    title: 'IIIT Rajasthan Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Guwahati
// Zoomed-in data for IIIT Guwahati (branches)
const iiitGuwahatiData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering '],
        y: [165,89],
        name: 'IIIT Guwahati Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Guwahati
const iiitGuwahatiLayout = {
    title: 'IIIT Guwahati Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT West Bengal
// Zoomed-in data for IIIT West Bengal (branches)
const iiitWestBengalData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering '],
        y: [128,65],
        name: 'IIIT West Bengal Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT West Bengal
const iiitWestBengalLayout = {
    title: 'IIIT West Bengal Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Haryana
// Zoomed-in data for IIIT Haryana (branches)
const iiitHaryanaData = [
    {
        x: ['Computer Science and Engineering','CSE ( Data Science & Analytics)','Information Technology'],
        y: [120,60,60],
        name: 'IIIT Haryana Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Haryana
const iiitHaryanaLayout = {
    title: 'IIIT Haryana Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Himachal Pradesh
// Zoomed-in data for IIIT Himachal Pradesh (branches)
const iiitHimachalPradeshData = [
    {
        x: ['Computer Science and Engineering (Cyber Security)','Computer Science and Engineering','Electronics and Communication Engineering','Computer Science and Engineering (Data Science)','Information Technology'],
        y: [30,78,78,30,78],
        name: 'IIIT Himachal Pradesh Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Himachal Pradesh
const iiitHimachalPradeshLayout = {
    title: 'IIIT Himachal Pradesh Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Chittoor
// Zoomed-in data for IIIT Chittoor (branches)
const iiitChittoorData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Artificial Intelligence and Data Science'],
        y: [275,96,66],
        name: 'IIIT Chittoor Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Chittoor
const iiitChittoorLayout = {
    title: 'IIIT Chittoor Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Gujrat
// Zoomed-in data for IIIT Gujrat (branches)
const iiitGujratData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Information Technology'],
        y: [275,96,66],
        name: 'IIIT Gujrat Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Gujrat
const iiitGujratLayout = {
    title: 'IIIT Gujrat Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Allahabad
// Zoomed-in data for IIIT Allahabad (branches)
const iiitAllahabadData = [
    {
        x: ['Electronics and Communication Engineering','Information Technology','Information Technology-Business Informatics'],
        y: [132,267,40],
        name: 'IIIT Allahabad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Allahabad
const iiitAllahabadLayout = {
    title: 'IIIT Allahabad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Kancheepuram
// Zoomed-in data for IIIT Kancheepuram (branches)
const iiitKancheepuramData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Mechanical Engineering','Smart Manufacturing','Computer Science and Engineering with Major in Artificial Intelligence','Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))','B.Tech. in Electronics and Communication Engineering and M.Tech. in VLSI Design (5 Years, Bachelor and Master of Technology (Dual Degree))','B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))','B.Tech in Mechanical Engineering and M.Tech in AI and Robotics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))'],
        y: [89,128,75,60,46,66,24,21,40],
        name: 'IIIT Kancheepuram Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Kancheepuram
const iiitKancheepuramLayout = {
    title: 'IIIT Kancheepuram Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Jabalpur
// Zoomed-in data for IIIT Jabalpur (branches)
const iiitJabalpurData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Mechanical Engineering','Smart Manufacturing'],
        y: [277,138,68,69],
        name: 'IIIT Jabalpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Jabalpur
const iiitJabalpurLayout = {
    title: 'IIIT Jabalpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Manipur
// Zoomed-in data for IIIT Manipur (branches)
const iiitManipurData = [
    {
        x: ['Electronics and Communication Engineering with specialization in VLSI and Embedded Systems','Computer Science and Engineering with specialization in Artificial Intelligence and Data Science ','Computer Science and Engineering','Electronics and Communication Engineering'],
        y: [277,138,68,69],
        name: 'IIIT Manipur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Manipur
const iiitManipurLayout = {
    title: 'IIIT Manipur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Tiruchirappalli
// Zoomed-in data for IIIT Tiruchirappalli (branches)
const iiitTiruchirappalliData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering'],
        y: [75,75],
        name: 'IIIT Tiruchirappalli Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Tiruchirappalli
const iiitTiruchirappalliLayout = {
    title: 'IIIT Tiruchirappalli Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Lucknow
// Zoomed-in data for IIIT Lucknow (branches)
const iiitLucknowData = [
    {
        x: ['Computer Science and Business','Information Technology','Computer Science','Computer Science and Artificial Intelligence'],
        y: [60,60,60,60],
        name: 'IIIT Lucknow Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Lucknow
const iiitLucknowLayout = {
    title: 'IIIT Lucknow Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Dharwad
// Zoomed-in data for IIIT Dharwad (branches)
const iiitDharwadData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Data Science and Artificial Intelligence'],
        y: [198,102,102],
        name: 'IIIT Dharwad Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Dharwad
const iiitDharwadLayout = {
    title: 'IIIT Dharwad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Andhra Pradesh
// Zoomed-in data for IIIT Andhra Pradesh (branches)
const iiitAndhraPradeshData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering with specialization in Design and Manufacturing','Mechanical Engineering with specialization in Design and Manufacturing','Artificial Intelligence and Data Science','Computer Science and Engineering','Mechanical Engineering','Electronics and Communication Engineering'],
        y: [79,65,54,69,20,20,20],
        name: 'IIIT Andhra Pradesh Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Andhra Pradesh
const iiitAndhraPradeshLayout = {
    title: 'IIIT Andhra Pradesh Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Kottayam
// Zoomed-in data for IIIT Kottayam (branches)
const iiitKottayamData = [
    {
        x: ['Computer Science and Engineering with specialization in Artificial Intelligence and Data Science','Computer Science and Engineering','Electronics and Communication Engineering','Computer Science and Engineering with specialization in Cyber Security'],
        y: [72,340,72,72],
        name: 'IIIT Kottayam Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Kottayam
const iiitKottayamLayout = {
    title: 'IIIT Kottayam Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Ranchi
// Zoomed-in data for IIIT Ranchi (branches)
const iiitRanchiData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Electronics and Communication Engineering (with Specialization of Embedded Systems and Internet of Things)','Computer Science and Engineering (with Specialization of Data Science and Artificial Intelligence)'],
        y: [120,90,30,30],
        name: 'IIIT Ranchi Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Ranchi
const iiitRanchiLayout = {
    title: 'IIIT Ranchi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Nagpur
// Zoomed-in data for IIIT Nagpur (branches)
const iiitNagpurData = [
    {
        x: ['Computer Science Engineering (Artificial lntelligence and Machine Learning)','Computer Science Engineering (Data Science and Analytics)','Computer Science Engineering (Human Computer lnteraction and Gaming Technology)','Electronics and Communication Engineering (Internet of Things)','Computer Science and Engineering','Electronics and Communication Engineering'],
        y: [66,66,66,66,223,150],
        name: 'IIIT Nagpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Nagpur
const iiitNagpurLayout = {
    title: 'IIIT Nagpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Pune
// Zoomed-in data for IIIT Pune (branches)
const iiitPuneData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering'],
        y: [267,88],
        name: 'IIIT Pune Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Pune
const iiitPuneLayout = {
    title: 'IIIT Pune Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Bhagalpur
// Zoomed-in data for IIIT Bhagalpur (branches)
const iiitBhagalpurData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering','Mechatronics and Automation Engineering','Mathematics and Computing'],
        y: [165,83,66,30],
        name: 'IIIT Bhagalpur Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Bhagalpur
const iiitBhagalpurLayout = {
    title: 'IIIT Bhagalpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Bhopal
// Zoomed-in data for IIIT Bhopal (branches)
const iiitBhopalData = [
    {
        x: ['Computer Science and Engineering (Cyber Security)','Computer Science and Engineering','Electronics and Communication Engineering','Computer Science and Engineering (Cyber Physical System)','Computer Science and Engineering (Data Science)','Computer Science and Engineering (Artificial Intelligence)','Information Technology'],
        y: [30,150,100,30,30,30,125],
        name: 'IIIT Bhopal Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Bhopal
const iiitBhopalLayout = {
    title: 'IIIT Bhopal Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Surat
// Zoomed-in data for IIIT Surat (branches)
const iiitSuratData = [
    {
        x: ['Computer Science and Engineering','Electronics and Communication Engineering'],
        y: [90,90],
        name: 'IIIT Surat Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Surat
const iiitSuratLayout = {
    title: 'IIIT Surat Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Agartala
// Zoomed-in data for IIIT Agartala (branches)
const iiitAgartalaData = [
    {
        x: ['Computer Science and Engineering'],
        y: [76],
        name: 'IIIT Agartala Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Agartala
const iiitAgartalaLayout = {
    title: 'IIIT Agartala Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};


//IIIT Karnataka
// Zoomed-in data for IIIT Karnataka (branches)
const iiitKarnatakaData = [
    {
        x: ['Computer Science and Engineering','Mathematics and Computing','Artificial Intelligence and Data Science'],
        y: [80,60,80],
        name: 'IIIT Karnataka Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Karnataka
const iiitKarnatakaLayout = {
    title: 'IIIT Karnataka Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

//IIIT Vadodara
// Zoomed-in data for IIIT Vadodara (branches)
const iiitVadodaraData = [
    {
        x: ['Computer Science and Engineering'],
        y: [108],
        name: 'IIIT Vadodara Branches',
        type: 'bar',
        marker: { color: '#9467bd' } // Purple
    }
];
// Zoomed-in layout for IIIT Vadodara
const iiitVadodaraLayout = {
    title: 'IIIT Vadodara International Campus Diu (IIITVICD) Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};



// Zoomed-in data for AssamUniversity (subcategories)
const AssamUniversityData = [
    {
        x: ["Computer Science and Engineering","Computer Science and Engineering(assam)","Electronics and Communication Engineering","Electronics and Communication Engineering(assam)","Agricultural Engineering","Agricultural Engineering(assam)" ],
        y: [29,31,29,31,29,31],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for AssamUniversity
const AssamUniversityLayout = {
    title: 'Assam University Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for BITMesra (subcategories)
const BITMesraData = [
    {
        x: ["Bio Technology","Bio Technology(Jharkhand)","Chemical Engineering","Chemical Engineering(Jharkhand)","Civil Engineering","Civil Engineering(Jharkhand)","Artificial Intelligence and Machine Learning","Artificial Intelligence and Machine Learning(Jharkhand)","Computer Science and Engineering","Computer Science and Engineering(Jharkhand)","Electronics and Communication Engineering","Electronics and Communication Engineering(Jharkhand)","Mechanical Engineering","Mechanical Engineering(Jharkhand)","Production and Industrial Engineering","Production and Industrial Engineering(Jharkhand)","Electrical and Electronics Engineering","Electrical and Electronics Engineering(Jharkhand)","Food Engineering and Technology","Food Engineering and Technology(Jharkhand)","Architecture (5 Years)","Architecture (5 Years) [Jharkhand]","Mathematics and Computing (5 Years)","Mathematics and Computing (5 Years) [Jharkhand]","Physics (5 Years)","Physics (5 Years) [Jharkhand]",'Quantitative Economics & Data Science (5 Years)','Quantitative Economics & Data Science (5 Years) [Jharkhand]'],
        y: [19,18,78,67,39,35,39,35,116,101,116,101,78,67,39,35,39,35,19,18,20,19,41,36,20,17,20,17],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for BITMesra
const BITMesraLayout = {
    title: 'Birla Institute of Technology, Mesra, Ranchi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Gurukula Kangri (subcategories)
const GurukulaKangriData = [
    {
        x: ['Computer Science and Engineering','Electrical Engineering',"Electronics and Communication Engineering",'Mechanical Engineering'],
        y: [230,115,115,115],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Gurukula Kangri
const GurukulaKangriLayout = {
    title: 'Gurukula Kangri Vishwavidyalaya, Haridwar Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Indian Institute of Carpet Technology, Bhadohi (subcategories)
const IICTData = [
    {
        x: ['Carpet and Textile Technology (4 Years, Bachelor of Technology)'],
        y: [33],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Indian Institute of Carpet Technology, Bhadohi
const IICTLayout = {
    title: 'Indian Institute of Carpet Technology, Bhadohi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Institute of Infrastructure, Technology, Research and Management-Ahmedabad (subcategories)
const IITRMData = [
    {
        x: ['Civil Engineering',"Electrical Engineering","Mechanical Engineering","Computer Engineering"],
        y: [39,39,39,39],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Institute of Infrastructure, Technology, Research and Management-Ahmedabad
const IITRMLayout = {
    title: 'Institute of Infrastructure, Technology, Research and Management-Ahmedabad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur (subcategories)
const SSETGData = [
    {
        x: ['Chemical Engineering',"Civil Engineering","Computer Science and Engineering ","Electrical Engineering","Electronics and Communication Engineering ","Mechanical Engineering","Information Technology","Industrial and Production Engineering"],
        y: [75,75,112,75,112,75,112,75],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur
const SSETGLayout = {
    title: 'School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad (subcategories)
const JKAPTAGData = [
    {
        x: ['Electronics and Communication Engineering','Computer Science and Engineering with Major in Artificial Intelligence'],
        y: [56,30],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad
const JKAPTAGLayout = {
    title: 'J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for National Institute of Electronics and Information Technology, Aurangabad (Maharashtra) (subcategories)
const NIETAMData = [
    {
        x: ['Electronic Engineering (4 Years, Bachelor of Technology)'],
        y: [60],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for National Institute of Electronics and Information Technology, Aurangabad (Maharashtra)
const NIETAMLayout = {
    title: 'National Institute of Electronics and Information Technology, Aurangabad (Maharashtra) Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for National Institute of Advanced Manufacturing Technology, Ranchi (subcategories)
const NIAMTRData = [
    {
        x: ['Mechanical Engineering',"Production and Industrial Engineering","Computer Engineering","Metallurgy and Materials Engineering"],
        y: [76,60,64,76],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for National Institute of Advanced Manufacturing Technology, Ranchi
const NIAMTRLayout = {
    title: 'National Institute of Advanced Manufacturing Technology, Ranchi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Sant Longowal Institute of Engineering and Technology (subcategories)
const SLIETData = [
    {
        x: ['Chemical Engineering',"Civil Engineering","Computer Science and Engineering","Electrical Engineering","Electronics and Communication Engineering","Mechanical Engineering","Instrumentation and Control Engineering","Food Technology","Chemistry (5 Years)","Physics (5 Years)","Mathematics (5 Years)"],
        y: [47,9,95,47,47,99,47,47,20,20,20],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Sant Longowal Institute of Engineering and Technology
const SLIETLayout = {
    title: 'Sant Longowal Institute of Engineering and Technology Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Mizoram University, Aizawl (subcategories)
const MizoramUniversityData = [
    {
        x: ['Civil Engineering',"Electrical Engineering","Electronics and Communication Engineering","Information Technology","Computer Engineering","Architecture (5 Years)"],
        y: [17,17,17,17,17,11],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Mizoram University, Aizawl
const MizoramUniversityLayout = {
    title: 'Mizoram University, Aizawl Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for School of Engineering, Tezpur University, Napaam, Tezpur (subcategories)
const SETUNData = [
    {
        x: ['Civil Engineering',"Computer Engineering","Electrical Engineering","Electronics and Communication Engineering","Mechanical Engineering","Food Engineering and Technology","Bachelor of Design "],
        y: [27,27,15,27,27,22,4],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for School of Engineering, Tezpur University, Napaam, Tezpur
const SETUNLayout = {
    title: 'School of Engineering, Tezpur University, Napaam, Tezpur Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for School of Planning & Architecture, Bhopal (subcategories)
const SPABhopalData = [
    {
        x: ['Planning (4 Years)',"Architecture (5 Years)"],
        y: [38,94],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for School of Planning & Architecture, Bhopal
const SPABhopalLayout = {
    title: 'School of Planning & Architecture, Bhopal Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for School of Planning & Architecture, New Delhi (subcategories)
const SPANewDelhiData = [
    {
        x: ['Planning (4 Years)',"Architecture (5 Years)"],
        y: [44,133],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for School of Planning & Architecture, New Delhi
const SPANewDelhiLayout = {
    title: 'School of Planning & Architecture, New Delhi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for School of Planning & Architecture, Vijayawada (subcategories)
const SPAVijayawadaData = [
    {
        x: ['Planning (4 Years)',"Architecture (5 Years)"],
        y: [38,94],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for School of Planning & Architecture, Vijayawada
const SPAVijayawadaLayout = {
    title: 'School of Planning & Architecture, Vijayawadai Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for SShri Mata Vaishno Devi University, Katra, Jammu & Kashmir (subcategories)
const ShriMataVaishnoData = [
    {
        x: ['Bio Technology',"Civil Engineering","Computer Science and Engineering","Electrical Engineering","Electronics and Communication Engineering","B.Tech in Mathematics and Computing","Mechanical Engineering","Architecture (5 Years)"],
        y: [20,30,60,30,60,30,30,10],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for SShri Mata Vaishno Devi University, Katra, Jammu & Kashmir
const ShriMataVaishnoLayout = {
    title: 'Shri Mata Vaishno Devi University, Katra, Jammu & Kashmiri Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for International Institute of Information Technology, Naya Raipur (subcategories)
const IIITNData = [
    {
        x: ['Computer Science and Engineering',"Electronics and Communication Engineering","Data Science and Artificial Intelligence"],
        y: [32,31,32],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for International Institute of Information Technology, Naya Raipur
const IIITNLayout = {
    title: 'International Institute of Information Technology, Naya Raipuri Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for University of Hyderabad (subcategories)
const UniversityHyderabadData = [
    {
        x: ['Computer Science and Engineering (5 Years)',"Materials Engineering (5 Years)"],
        y: [50,60],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for University of Hyderabad
const UniversityHyderabadLayout = {
    title: 'University of Hyderabadi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Punjab Engineering College, Chandigarh (subcategories)
const PECCData = [
    {
        x: ['Aerospace Engineering(UT)',"Aerospace Engineering","Civil Engineering(UT)","Civil Engineering","Computer Science and Engineering(UT)","Computer Science and Engineering","Electrical Engineering(UT)","Electrical Engineering","Electronics and Communication Engineering(UT)","Electronics and Communication Engineering","Electronics Engineering (VLSI Design and Technology)[UT]","Electronics Engineering (VLSI Design and Technology)","Mathematics and Computing(UT)","Mathematics and Computing","Mechanical Engineering(UT)","Mechanical Engineering","Metallurgical and Materials Engineering(UT)","Metallurgical and Materials Engineering","Production and Industrial Engineering(UT)","Production and Industrial Engineering","Computer Science Engineering (Artificial Intelligence)[UT]","Computer Science Engineering (Artificial Intelligence)","Computer Science Engineering (Data Science)[UT]","Computer Science Engineering (Data Science)"],
        y: [12,13,54,56,54,56,54,56,54,56,13,14,13,14,54,56,27,28,18,19,12,13,26,28],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Punjab Engineering College, Chandigarh
const PECCLayout = {
    title: 'Punjab Engineering College, Chandigarhi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for PJawaharlal Nehru University, Delhi (subcategories)
const JNUDData = [
    {
        x: ["Computer Science and Engineering","Electronics and Communication Engineering"],
        y: [63,63],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for PJawaharlal Nehru University, Delhi
const JNUDLayout = {
    title: 'Jawaharlal Nehru University, Delhii Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for International Institute of Information Technology, Bhubaneswar (subcategories)
const IIITBData = [
    {
        x: ["Computer Science and Engineering","Electrical and Electronics Engineering","Information Technology","Computer Engineering","Electronics and Telecommunication Engineering"],
        y: [75,37,37,37,37],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for International Institute of Information Technology, Bhubaneswar
const IIITBLayout = {
    title: 'International Institute of Information Technology, Bhubaneswari Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Central institute of Technology Kokrajar, Assam (subcategories)
const CITKAData = [
    {
        x: ["Civil Engineering","Computer Science and Engineering","Electronics and Communication Engineering ","Instrumentation Engineering ","Food Engineering and Technology "],
        y: [5,7,4,3,5],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Central institute of Technology Kokrajar, Assam
const CITKALayout = {
    title: 'Central institute of Technology Kokrajar, Assami Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Puducherry Technological University, Puducherry (subcategories)
const PTUPData = [
    {
        x: ["Chemical Engineering ","Chemical Engineering[UT]","Civil Engineering ","Civil Engineering [UT]","Computer Science and Engineering","Computer Science and Engineering[UT]","Electronics and Communication Engineering","Electronics and Communication Engineering[UT]","Mechanical Engineering","Mechanical Engineering[UT]","Electronics and Instrumentation Engineering","Electronics and Instrumentation Engineering[UT]","Electrical and Electronics Engineering","Electrical and Electronics Engineering[UT]","Information Technology","Information Technology[UT]","Mechatronics Engineering","Mechatronics Engineering[UT]"],
        y: [6,0,51,15,51,15,51,15,51,15,6,0,6,0,6,0,22,7],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Puducherry Technological University, Puducherry
const PTUPLayout = {
    title: 'Puducherry Technological University, Puducherryi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal (subcategories)
const GKCIETMData = [
    {
        x: ["Computer Science Engineering (Artificial lntelligence and Machine Learning)","Computer Science Engineering (Artificial lntelligence and Machine Learning)[AI]","Civil and Environmental Engineering","Civil and Environmental Engineering[AI]","Electrical Engineering","Electrical Engineering[AI]","Mechanical Engineering","Mechanical Engineering[AI]","Food Technology","Food Technology[AI]"],
        y: [19,19,19,19,19,18,19,18,18,19],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal
const GKCIETMLayout = {
    title: 'Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengali Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Central University of Rajasthan, Rajasthan (subcategories)
const CURRData = [
    {
        x: ["Computer Science and Engineering","Electronics and Communication Engineering","Bio Medical Engineering"],
        y: [30,30,30],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Central University of Rajasthan, Rajasthan
const CURRLayout = {
    title: 'Central University of Rajasthan, Rajasthani Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for National Institute of Food Technology Entrepreneurship and Management, Kundli (subcategories)
const NIFTEMKData = [
    {
        x: ["Food Technology and Management"],
        y: [100],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for National Institute of Food Technology Entrepreneurship and Management, Kundli
const NIFTEMKLayout = {
    title: 'National Institute of Food Technology Entrepreneurship and Management, Kundlii Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for National Institute of Food Technology Entrepreneurship and Management, Thanjavur (subcategories)
const NIFTEMTData = [
    {
        x: ["Food Technology"],
        y: [90],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for National Institute of Food Technology Entrepreneurship and Management, Thanjavur
const NIFTEMTLayout = {
    title: 'National Institute of Food Technology Entrepreneurship and Management, Thanjavuri Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh (subcategories)
const NERISTData = [
    {
        x: ["Civil Engineering","Computer Science and Engineering","Electrical Engineering","Electronics and Communication Engineering","Mechanical Engineering","Agricultural Engineering"],
        y: [2,6,2,2,2,2],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh
const NERISTLayout = {
    title: 'North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradeshi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Indian Institute of Handloom Technology(IIHT), Varanasi (subcategories)
const IIHTVaranasiTData = [
    {
        x: ["Handloom and Textile Technology (4 Years, Bachelor of Technology)"],
        y: [33],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Indian Institute of Handloom Technology(IIHT), Varanasi
const IIHTVaranasiTLayout = {
    title: 'Indian Institute of Handloom Technology(IIHT), Varanasii Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Indian Institute of Handloom Technology(IIHT), Varanasi (subcategories)
const CSVTUBhilaiTData = [
    {
        x: ["Civil Engineering","Computer Science Engineering (Artificial Intelligence)","Computer Science Engineering (Data Science)"],
        y: [30,45,45],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Indian Institute of Handloom Technology(IIHT), Varanasi
const CSVTUBhilaiTLayout = {
    title: 'Indian Institute of Handloom Technology(IIHT), Varanasii Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar (subcategories)
const ICTMIOData = [
    {
        x: ["Chemical Engineering (5 Years, Integrated Masters in Technology)","Chemical Engineering (5 Years, Integrated Masters in Technology)[Odisha]"],
        y: [46,20],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar
const ICTMIOLayout = {
    title: 'Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswari Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for North-Eastern Hill University, Shillong (subcategories)
const NRHUSData = [
    {
        x: ["Electronics and Communication Engineering","Information Technology","Biomedical Engineering","Energy Engineering"],
        y: [20,20,20,20],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for North-Eastern Hill University, Shillong
const NRHUSLayout = {
    title: 'North-Eastern Hill University, Shillongi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Central University of Jammu (subcategories)
const CUJammuData = [
    {
        x: ["Electronics and Communication Engineering (Avionics)","Computer Science and Engineering","Electronics and Communication Engineering","Computer Science and Engineering with specialization in Cyber Security"],
        y: [30,60,60,60],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Central University of Jammu
const CUJammuLayout = {
    title: 'Central University of Jammui Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University) (subcategories)
const IETDrHSData = [
    {
        x: ["Computer Science and Engineering","Electronics and Communication Engineering","Aeronautical Engineering","Dairy Engineering ","Fashion and Apparel Engineering","Food Engineering and Technology"],
        y: [60,60,60,60,60,60],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University)
const IETDrHSLayout = {
    title: 'Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University)i Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Central University of Haryana (subcategories)
const CUHaryanaData = [
    {
        x: ["Civil Engineering","Computer Science and Engineering","Electrical Engineering","Printing and Packaging Technology"],
        y: [60,60,60,30],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Central University of Haryana
const CUHaryanaLayout = {
    title: 'Central University of Haryanai Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Birla Institute of Technology, Deoghar Off-Campus (subcategories)
const BITDData = [
    {
        x: ["Computer Science and Engineering","Computer Science and Engineering[Jharkhand]","Electronics and Communication Engineering","Electronics and Communication Engineering[Jharkhand]","Mechanical Engineering","Mechanical Engineering[Jharkhand]","Electrical and Electronics Engineering","Electrical and Electronics Engineering[Jharkhand]"],
        y: [60,53,41,36,21,17,21,17],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Birla Institute of Technology, Deoghar Off-Campus
const BITDLayout = {
    title: 'Birla Institute of Technology, Deoghar Off-Campusi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Birla Institute of Technology, Patna Off-Campus (subcategories)
const BITPData = [
    {
        x: ["Civil Engineering","Civil Engineering[Bihar]","Artificial Intelligence and Machine Learning","Artificial Intelligence and Machine Learning[Bihar]","Computer Science and Engineering","Computer Science and Engineering[Bihar]","Electronics and Communication Engineering","Electronics and Communication Engineering [Bihar]","Mechanical Engineering","Mechanical Engineering[Bihar]","Electrical and Electronics Engineering","Electrical and Electronics Engineering[bihar]"],
        y: [40,31,40,31,40,31,40,31,40,31,40,31],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Birla Institute of Technology, Patna Off-Campus
const BITPLayout = {
    title: 'Birla Institute of Technology, Patna Off-Campusi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Indian Institute of Handloom Technology, Salem (subcategories)
const IIHTSData = [
    {
        x: ["Handloom and Textile Technology"],
        y: [30],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Indian Institute of Handloom Technology, Salem
const IIHTSLayout = {
    title: 'Indian Institute of Handloom Technology, Salemi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for Gati Shakti Vishwavidyalaya, Vadodara (subcategories)
const GSVVData = [
    {
        x: ["B.Tech in Electronics & Communication Engineering (Rail Engineering)","B.Tech in Electrical Engineering ( Rail Engineering)","B.Tech in Mechanical Engineering ( Rail Engineering)","B.Tech in Civil Engineering (Rail Engineering)","B.Tech in Artificial Intelligenece and Data Science (Transportation and Logistics)","B.Tech in Aviation Engineering "],
        y: [63,65,66,70,69,35],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for Gati Shakti Vishwavidyalaya, Vadodara
const GSVVLayout = {
    title: 'Gati Shakti Vishwavidyalaya, Vadodarai Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};

// Zoomed-in data for CU Jharkhand (subcategories)
const CUJharkhandData = [
    {
        x: ["Integrated B. Tech.- M. Tech in Metallurgical & Materials Engineering (5 Years)","ntegrated B. Tech. - M. Tech in Electrical Engineering (5 Years)","Integrated B. Tech. - M. Tech in Civil Engineering (5 Years)","Integrated B. Tech. - M. Tech in Computer Science & Engineering (5 Years)"],
        y: [60,60,60,60],
        name: 'GFTI Seat',
        type: 'bar',
        marker: { color: '#9467bd' } // Orange
    }
];
// Zoomed-in layout for CU Jharkhand
const CUJharkhandLayout = {
    title: 'CU Jharkhandi Breakdown',
    //xaxis: { title: 'Branches' },
    yaxis: { title: 'Total Seats' },
    clickmode: 'event+select', // Enable click events
    barmode: 'stack',
    displayModeBar: false // Disable the mode bar
};



// Track the current chart context
let currentChartContext = 'Institutions'; // Initialize with the main chart context

function attachClickEvent() {
    document.getElementById('chart').on('plotly_click', function(eventData) {
        const clickedCategory = eventData.points[0].data.x[eventData.points[0].pointIndex]; // Get the clicked category
        console.log('Clicked Category:', clickedCategory);
        console.log('Current Chart Context:', currentChartContext);

        // Handle chart transitions
        if (clickedCategory === 'IIT' && currentChartContext === 'Institutions') {
            Plotly.newPlot('chart', iitData, iitLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT' && currentChartContext === 'Institutions') {
            Plotly.newPlot('chart', nitData, nitLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Breakdown'; // Update context
        } 
        else if (clickedCategory === 'IIIT' && currentChartContext === 'Institutions') {
            Plotly.newPlot('chart', iiitData, iiitLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Breakdown'; // Update context
        } 
        //GFTI
        else if (clickedCategory === 'GFTI' && currentChartContext === 'Institutions') {
            Plotly.newPlot('chart', gftiData, gftiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'GFTI Breakdown'; // Update context
        } 
        else if (clickedCategory === 'Private' && currentChartContext === 'Institutions') {
            Plotly.newPlot('chart', PrivateData, PrivateLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Private Breakdown'; // Update context
        } 
        else if (clickedCategory === 'IIT Bhubaneswar' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitBhubaneswarData, iitBhubaneswarLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Bhubaneswar Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Bombay' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitBombayData, iitBombayLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Bombay Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Mandi' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitMandiData, iitMandiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Mandi Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Delhi' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitDelhiData, iitDelhiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Delhi Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Indore' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitIndoreData, iitIndoreLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Indore Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Kharagpur' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitKharagpurData, iitKharagpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Kharagpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Hyderabad' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitHyderabadData, iitHyderabadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Hyderabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Jodhpur' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitJodhpurData, iitJodhpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Jodhpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Kanpur' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitKanpurData, iitKanpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Kanpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Madras' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitMadrasData, iitMadrasLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Madras Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Gandhinagar' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitGandhinagarData, iitGandhinagarLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Gandhinagar Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Patna' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitPatnaData, iitPatnaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Patna Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Roorkee' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitRoorkeeData, iitRoorkeeLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Roorkee Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Dhanbad' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitDhanbadData, iitDhanbadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Dhanbad Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Ropar' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitRoparData, iitRoparLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Ropar Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Varanasi' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitVaranasiData, iitVaranasiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Varanasi Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Guwahati' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitGuwahatiData, iitGuwahatiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Guwahati Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Bhilai' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitBhilaiData, iitBhilaiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Bhilai Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Goa' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitGoaData, iitGoaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Goa Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Palakkad' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitPalakkadData, iitPalakkadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Palakkad Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Tirupati' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitTirupatiData, iitTirupatiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Tirupati Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Jammu' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitJammuData, iitJammuLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Jammu Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIT Dharwad' && currentChartContext === 'IIT Breakdown') {
            Plotly.newPlot('chart', iitDharwadData, iitDharwadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIT Dharwad Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Jalandhar' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitJalandharData, nitJalandharLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Jalandhar Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Jaipur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitJaipurData, nitJaipurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Jaipur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Bhopal' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitBhopalData, nitBhopalLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Bhopal Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Allahabad' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitAllahabadData, nitAllahabadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Allahabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Agartala' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitAgartalaData, nitAgartalaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Agartala Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Calicut' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitCalicutData, nitCalicutLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Calicut Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Delhi' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitDelhiData, nitDelhiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Delhi Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Durgapur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitDurgapurData, nitDurgapurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Durgapur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Goa' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitGoaData, nitGoaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Goa Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Hamirpur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitHamirpurData, nitHamirpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Hamirpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Karnataka' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitKarnatakaData, nitKarnatakaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Karnataka Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Meghalaya' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitMeghalayaData, nitMeghalayaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Meghalaya Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Nagaland' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitNagalandData, nitNagalandLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Nagaland Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Patna' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitPatnaData, nitPatnaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Patna Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Puducherry' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitPuducherryData, nitPuducherryLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Puducherry Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Raipur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitRaipurData, nitRaipurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Raipur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Sikkim' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitSikkimData, nitSikkimLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Sikkim Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT ArunachalPradesh' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitArunachalPradeshData, nitArunachalPradeshLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT ArunachalPradesh Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Jamshedpur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitJamshedpurData, nitJamshedpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Jamshedpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Kurukshetra' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitKurukshetraData, nitKurukshetraLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Kurukshetra Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Manipur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitManipurData, nitManipurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Manipur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Mizoram' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitMizoramData, nitMizoramLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Mizoram Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Rourkela' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitRourkelaData, nitRourkelaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Rourkela Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Srinagar' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitSrinagarData, nitSrinagarLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Srinagar Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Silchar' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitSilcharData, nitSilcharLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Silchar Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Tiruchirappalli' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitTiruchirappalliData, nitTiruchirappalliLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Tiruchirappalli Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Uttrakhand' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitUttrakhandData, nitUttrakhandLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Uttrakhand Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Warangal' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitWarangalData, nitWarangalLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Warangal Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Surat' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitSuratData, nitSuratLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Surat Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT Nagpur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitNagpurData, nitNagpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Nagpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'NIT AndhraPradesh' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitAndhraPradeshData, nitAndhraPradeshLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT AndhraPradesh Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIEST Shibpur' && currentChartContext === 'NIT Breakdown') {
            Plotly.newPlot('chart', nitShibpurData, nitShibpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'NIT Shibpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Gwalior' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitGwaliorData, iiitGwaliorLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Gwalior Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Rajasthan' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitRajasthanData, iiitRajasthanLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Rajasthan Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Guwahati' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitGuwahatiData, iiitGuwahatiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Guwahati Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT West Bengal' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitWestBengalData, iiitWestBengalLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT West Bengal Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Haryana' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitHaryanaData, iiitHaryanaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Haryana Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Himachal Pradesh' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitHimachalPradeshData, iiitHimachalPradeshLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Himachal Pradesh Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Chittoor' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitChittoorData, iiitChittoorLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Chittoor Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Gujrat' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitGujratData, iiitGujratLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Gujrat Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Allahabad' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitAllahabadData, iiitAllahabadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Allahabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Kancheepuram' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitKancheepuramData, iiitKancheepuramLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Kancheepuram Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Jabalpur' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitJabalpurData, iiitJabalpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Jabalpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Manipur' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitManipurData, iiitManipurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Manipur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Tiruchirappalli' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitTiruchirappalliData, iiitTiruchirappalliLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Tiruchirappalli Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Lucknow' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitLucknowData, iiitLucknowLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Lucknow Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Dharwad' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitDharwadData, iiitDharwadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Dharwad Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Andhra Pradesh' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitAndhraPradeshData, iiitAndhraPradeshLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Andhra Pradesh Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Kottayam' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitKottayamData, iiitKottayamLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Kottayam Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Ranchi' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitRanchiData, iiitRanchiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Ranchi Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Nagpur' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitNagpurData, iiitNagpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Nagpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Pune' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitPuneData, iiitPuneLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Pune Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Bhagalpur' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitBhagalpurData, iiitBhagalpurLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Bhagalpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Bhopal' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitBhopalData, iiitBhopalLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Bhopal Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Surat' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitSuratData, iiitSuratLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Surat Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Agartala' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitAgartalaData, iiitAgartalaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Agartala Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Karnataka' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitKarnatakaData, iiitKarnatakaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Karnataka Breakdown'; // Update context
        }
        else if (clickedCategory === 'IIIT Vadodara International Campus Diu (IIITVICD)' && currentChartContext === 'IIIT Breakdown') {
            Plotly.newPlot('chart', iiitVadodaraData, iiitVadodaraLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'IIIT Vadodara International Campus Diu (IIITVICD) Breakdown'; // Update context
        }
        else if (clickedCategory === 'Assam University' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', AssamUniversityData, AssamUniversityLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Assam University Breakdown'; // Update context
        }
        else if (clickedCategory === 'Birla Institute of Technology, Mesra, Ranchi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', BITMesraData, BITMesraLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Birla Institute of Technology, Mesra, Ranchi Breakdown'; // Update context
        }
        else if (clickedCategory === 'Gurukula Kangri Vishwavidyalaya, Haridwar' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', GurukulaKangriData, GurukulaKangriLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Gurukula Kangri Vishwavidyalaya, Haridwar Breakdown'; // Update context
        }
        else if (clickedCategory === 'Indian Institute of Carpet Technology, Bhadohi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IICTData, IICTLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Indian Institute of Carpet Technology, Bhadohi Breakdown'; // Update context
        }
        else if (clickedCategory === 'Institute of Infrastructure, Technology, Research and Management-Ahmedabad' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IITRMData, IITRMLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Institute of Infrastructure, Technology, Research and Management-Ahmedabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SSETGData, SSETGLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur Breakdown'; // Update context
        }
        else if (clickedCategory === 'J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', JKAPTAGData, JKAPTAGLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'National Institute of Electronics and Information Technology, Aurangabad (Maharashtra)' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NIETAMData, NIETAMLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'National Institute of Electronics and Information Technology, Aurangabad (Maharashtra) Breakdown'; // Update context
        }
        else if (clickedCategory === 'National Institute of Advanced Manufacturing Technology, Ranchi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NIAMTRData, NIAMTRLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'National Institute of Advanced Manufacturing Technology, Ranchi Breakdown'; // Update context
        }
        else if (clickedCategory === 'Sant Longowal Institute of Engineering and Technology' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SLIETData, SLIETLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Sant Longowal Institute of Engineering and Technology Breakdown'; // Update context
        }
        else if (clickedCategory === 'Mizoram University, Aizawl' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', MizoramUniversityData, MizoramUniversityLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Mizoram University, Aizawl Breakdown'; // Update context
        }
        else if (clickedCategory === 'School of Engineering, Tezpur University, Napaam, Tezpur' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SETUNData, SETUNLayoutt).then(attachClickEvent); // Reattach event
            currentChartContext = 'School of Engineering, Tezpur University, Napaam, Tezpur Breakdown'; // Update context
        }
        else if (clickedCategory === 'School of Planning & Architecture, Bhopal' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SPABhopalData, SPABhopalLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'School of Planning & Architecture, Bhopal Breakdown'; // Update context
        }
        else if (clickedCategory === 'School of Planning & Architecture, New Delhi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SPANewDelhiData, SPANewDelhiLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'School of Planning & Architecture, New Delhi Breakdown'; // Update context
        }
        else if (clickedCategory === 'School of Planning & Architecture: Vijayawada' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', SPAVijayawadaData, SPAVijayawadaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'School of Planning & Architecture: Vijayawada Breakdown'; // Update context
        }
        else if (clickedCategory === 'Shri Mata Vaishno Devi University, Katra, Jammu & Kashmir' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', ShriMataVaishnoData, ShriMataVaishnoLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Shri Mata Vaishno Devi University, Katra, Jammu & Kashmir Breakdown'; // Update context
        }
        else if (clickedCategory === 'International Institute of Information Technology, Naya Raipur' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IIITNData, IIITNLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'International Institute of Information Technology, Naya Raipur Breakdown'; // Update context
        }
        else if (clickedCategory === 'University of Hyderabad' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', UniversityHyderabadData, UniversityHyderabadLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'University of Hyderabad Breakdown'; // Update context
        }
        else if (clickedCategory === 'Punjab Engineering College, Chandigarh' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', PECCData, PECCLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Punjab Engineering College, Chandigarh Breakdown'; // Update context
        }
        else if (clickedCategory === 'Jawaharlal Nehru University, Delhi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', JNUDData, JNUDLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Jawaharlal Nehru University, Delhi Breakdown'; // Update context
        }
        else if (clickedCategory === 'International Institute of Information Technology, Bhubaneswar' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IIITBData, IIITBLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'International Institute of Information Technology, Bhubaneswar Breakdown'; // Update context
        }
        else if (clickedCategory === 'Central institute of Technology Kokrajar, Assam' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CITKAData, CITKALayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Central institute of Technology Kokrajar, Assam Breakdown'; // Update context
        }
        else if (clickedCategory === 'Puducherry Technological University, Puducherry' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', PTUPData, PTUPLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Puducherry Technological University, Puducherry Breakdown'; // Update context
        }
        else if (clickedCategory === 'Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', GKCIETMData, GKCIETMLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal Breakdown'; // Update context
        }
        else if (clickedCategory === 'Central University of Rajasthan, Rajasthan' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CURRData, CURRLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Central University of Rajasthan, Rajasthan Breakdown'; // Update context
        }
        else if (clickedCategory === 'National Institute of Food Technology Entrepreneurship and Management, Kundli' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NIFTEMKData, NIFTEMKLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'National Institute of Food Technology Entrepreneurship and Management, Kundli Breakdown'; // Update context
        }
        else if (clickedCategory === 'National Institute of Food Technology Entrepreneurship and Management, Thanjavur' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NIFTEMTData, NIFTEMTLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'National Institute of Food Technology Entrepreneurship and Management, Thanjavur Breakdown'; // Update context
        }
        else if (clickedCategory === 'North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NERISTData, NERISTLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh Breakdown'; // Update context
        }
        else if (clickedCategory === 'Indian Institute of Handloom Technology(IIHT), Varanasi' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IIHTVaranasiTData, IIHTVaranasiTLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Indian Institute of Handloom Technology(IIHT), Varanasi Breakdown'; // Update context
        }
        else if (clickedCategory === 'Chhattisgarh Swami Vivekanada Technical University, Bhilai (CSVTU Bhilai)' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CSVTUBhilaiTData, CSVTUBhilaiTLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Chhattisgarh Swami Vivekanada Technical University, Bhilai (CSVTU Bhilai) Breakdown'; // Update context
        }
        else if (clickedCategory === 'Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', ICTMIOData, ICTMIOLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar Breakdown'; // Update context
        }
        else if (clickedCategory === 'North-Eastern Hill University, Shillong' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', NRHUSData, NRHUSLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'North-Eastern Hill University, Shillong Breakdown'; // Update context
        }
        else if (clickedCategory === 'Central University of Jammu' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CUJammuData, CUJammuLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Central University of Jammu Breakdown'; // Update context
        }
        else if (clickedCategory === 'Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University)' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IETDrHSData, IETDrHSLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University) Breakdown'; // Update context
        }
        else if (clickedCategory === 'Central University of Haryana' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CUHaryanaData, CUHaryanaLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Central University of Haryana Breakdown'; // Update context
        }
        else if (clickedCategory === 'Birla Institute of Technology, Deoghar Off-Campus' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', BITDData, BITDLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Birla Institute of Technology, Deoghar Off-Campus Breakdown'; // Update context
        }
        else if (clickedCategory === 'Birla Institute of Technology, Patna Off-Campus' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', BITPData, BITPLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Birla Institute of Technology, Patna Off-Campus Breakdown'; // Update context
        }
        else if (clickedCategory === 'Indian Institute of Handloom Technology, Salem' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', IIHTSData, IIHTSLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Indian Institute of Handloom Technology, Salem Breakdown'; // Update context
        }
        else if (clickedCategory === 'Gati Shakti Vishwavidyalaya, Vadodara' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', GSVVData, GSVVLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'Gati Shakti Vishwavidyalaya, Vadodara Breakdown'; // Update context
        }
        else if (clickedCategory === 'CU Jharkhand' && currentChartContext === 'GFTI Breakdown') {
            Plotly.newPlot('chart', CUJharkhandData, CUJharkhandLayout).then(attachClickEvent); // Reattach event
            currentChartContext = 'CU Jharkhand Breakdown'; // Update context
        }
        else { 
            alert(`Zoom feature is not yet implemented for ${clickedCategory}!`);
        }
    });
}
// Initialize the first chart and attach the event listener
Plotly.newPlot('chart', mainData, mainLayout).then(attachClickEvent);
