var zodiac = [
	{
		sign: "aquarius",
		personality: "Intellectual, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png",
	},
	{
		sign: "aries",
		personality: "Courageous,Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		personality: "Sensitive, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		personality: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		personality: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		personality: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		personality: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		personality: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		personality: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		personality: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		personality: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		personality: "Practical, Perfectionist,Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	}
];

function horoscope() {
var userdata = document.getElementById("userdata") // get user input such as leo or aries
// set all html emements that display things to zero
document.getElementById("signName").textContent = "";
document.getElementById("yourHoroscope").textContent =  "";
document.getElementById("signImage").src = null;
document.getElementById("errorMessage").textContent=""

// if the sign entered by user is not entered correctly. ALL THE variables set to zero
//will remain zero
	  for(var i = 0; i < zodiac.length; i = i + 1) {
	    if(userdata.value.toLowerCase() == zodiac[i].sign) {
	      document.getElementById("signName").textContent = zodiac[i].sign;
	      document.getElementById("yourHoroscope").textContent =  zodiac[i].personality;
	      document.getElementById("signImage").src = zodiac[i].image;
        }

    }
	// if the values come out of the for loops as zeroes that means not a real sign
	// then the error will be displayed
if(document.getElementById("signName").textContent == ""){
	document.getElementById("errorMessage").textContent="Please try again! "

}

}
