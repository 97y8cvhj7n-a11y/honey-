window.addEventListener('DOMContentLoaded', () => {
    let userName = sessionStorage.getItem('visitorName');
    
    // إنشاء رسالة تنبيه تظهر عند الدخول لأول مرة لتسجيل اسم المستخدم
    if (!userName) {
        userName = prompt("مرحباً بك في موقع عسل الباحة! فضلاً أدخل اسمك الكريم:");
        
        if (!userName || userName.trim() === "") {
            userName = "زائرنا الكريم";
        }
        sessionStorage.setItem('visitorName', userName);
        alert("مرحباً بك يا " + userName + " في موقع عسل الباحة - نقاء الطبيعة! نتمنى لك تجربة ممتعة ✨");
    }
    
    checkTimeAndGreet(userName);
});

// دالة جافا سكريبت خارجية لإظهار رسالة ترحيبية حسب وقت الزيارة بدقة
function checkTimeAndGreet(name) {
    const greetingElement = document.getElementById('time-greeting');
    
    if (greetingElement) {
        const now = new Date();
        const hours = now.getHours(); 
        const minutes = now.getMinutes();

        let greetingText = "";

        // صباح الخير: من 6:00 AM إلى 2:00 PM تماماً 
        if (hours >= 6 && (hours < 14 || (hours === 14 && minutes === 0))) {
            greetingText = "صباح الخير ☀️، يا " + name;
        } 
        // مساء الخير: من 2:01 PM إلى غاية 5:59 AM
        else {
            greetingText = "مساء الخير 🌙، يا " + name;
        }

        greetingElement.innerText = greetingText;
    }
}

// برمجة قائمة الهمبرغر المتجاوبة للجوال والأيباد
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.querySelector('ul').classList.toggle('show');
    });
}

// تفاعل زر عرض اسم مصممة الموقع والتواصل الفوري المكتوب بالأسفل
const showContactBtn = document.getElementById('show-contact-btn');
if (showContactBtn) {
    const contactInfoText = document.getElementById('contact-info');
    showContactBtn.addEventListener('click', () => {
        if (contactInfoText.style.display === "none") {
            contactInfoText.style.display = "inline-block";
            contactInfoText.innerHTML = "📞 للطلب والتواصل: <strong>+966 56 593 8480</strong><br><small>مشروع فخم مقدم من الملكة ميرال وزميلاتها المبدعات ✨</small>";
        } else {
            contactInfoText.style.display = "none";
        }
    });
}