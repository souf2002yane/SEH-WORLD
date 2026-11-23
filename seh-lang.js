// SEH World - Language System | نظام الترجمة
// Default: English | الافتراضي: الإنجليزية
const SEH_LANG = {
  current: localStorage.getItem('seh_lang') || 'en',
  dict: {
    login_signup: { en: 'Login / Sign Up', ar: 'تسجيل الدخول / إنشاء حساب' },
    site_subtitle: { en: 'My Personal Website - Stories, Learning and Games', ar: 'موقعي الشخصي - قصص، تعلّم وألعاب' },
    menu: { en: 'MENU', ar: 'القائمة' },
    info: { en: 'INFO PERSONAL', ar: 'معلوماتي' },
    game: { en: 'GAME', ar: 'اللعبة' },
    stories: { en: 'STORIES', ar: 'القصص' },
    hero_title: { en: 'We Draw Your Dream On A Small Screen', ar: 'نرسم حلمك على شاشة صغيرة' },
    hero_sub: { en: 'Discover The Website Now ↓', ar: 'اكتشف الموقع الآن ↓' },
    hero_quote: { en: '"This is the first website for us that\'s why we need you to support us"', ar: '"هذا هو موقعنا الأول، لذلك نحتاج إلى دعمكم"' },
    choose_world: { en: 'CHOOSE YOUR WORLD 🌍', ar: 'اختر عالمك 🌍' },
    choose_sub: { en: 'Choose your world and start the adventure', ar: 'اختر عالمك وابدأ المغامرة' },
    level: { en: 'LEVEL:', ar: 'المستوى:' },
    points: { en: 'POINTS:', ar: 'النقاط:' },
    game_world: { en: 'GAME WORLD', ar: 'عالم الألعاب' },
    game_world_desc: { en: 'Exciting Games - Challenge - Fun - Focus', ar: 'ألعاب مشوقة - تحدٍّ - متعة - تركيز' },
    enter_world: { en: 'ENTER WORLD →', ar: 'ادخل العالم ←' },
    story_world: { en: 'STORY WORLD', ar: 'عالم القصص' },
    story_world_desc: { en: 'True Stories That Inspire You And Push You Forward', ar: 'قصص حقيقية تُلهمك وتدفعك إلى الأمام' },
    read_story: { en: 'READ STORY →', ar: 'اقرأ القصة ←' },
    choose_game: { en: '🎮 Choose Your Game And Start Playing:', ar: '🎮 اختر لعبتك وابدأ اللعب:' },
    g_memory: { en: 'Memory', ar: 'الذاكرة' },
    g_memory_s: { en: 'Memory', ar: 'الذاكرة' },
    g_reaction: { en: 'Reaction', ar: 'سرعة الاستجابة' },
    g_speed: { en: 'Speed', ar: 'السرعة' },
    g_target: { en: 'Target', ar: 'الهدف' },
    g_focus: { en: 'Focus', ar: 'التركيز' },
    g_number: { en: 'Number', ar: 'الأرقام' },
    g_numbers: { en: 'Numbers', ar: 'الأرقام' },
    g_color: { en: 'Color', ar: 'الألوان' },
    g_colors: { en: 'Colors', ar: 'الألوان' },
    g_puzzle: { en: 'Puzzle', ar: 'اللغز' },
    g_intel: { en: 'Intelligence', ar: 'الذكاء' },
    play_all_games: { en: 'PLAY ALL GAMES 🎮', ar: 'العب جميع الألعاب 🎮' },
    today_story: { en: "📚 Today's Story For You:", ar: '📚 قصة اليوم لك:' },
    read_all_stories: { en: 'READ ALL STORIES 📚', ar: 'اقرأ جميع القصص 📚' },
    daily_challenge: { en: '🎲 Daily Challenge', ar: '🎲 التحدي اليومي' },
    new_challenge: { en: '🎲 New Challenge', ar: '🎲 تحدٍّ جديد' },
    shop_title: { en: '🛒 Points Shop', ar: '🛒 متجر النقاط' },
    you_have: { en: 'You have', ar: 'لديك' },
    points_word: { en: 'points', ar: 'نقطة' },
    vip_badge: { en: 'VIP Badge - 100 Points', ar: 'شارة VIP - 100 نقطة' },
    vip_desc: { en: 'Golden crown next to your name', ar: 'تاج ذهبي بجانب اسمك' },
    color_theme: { en: 'Color Theme - 50 Points', ar: 'تغيير اللون - 50 نقطة' },
    color_desc: { en: 'Special color for your profile', ar: 'لون خاص للملف الشخصي' },
    gold_star: { en: 'Golden Star - 30 Points', ar: 'نجمة ذهبية - 30 نقطة' },
    gold_desc: { en: 'Appears in Top 10', ar: 'تظهر في قائمة الأفضل' },
    extra_game: { en: 'Extra Game - 80 Points', ar: 'لعبة إضافية - 80 نقطة' },
    extra_desc: { en: 'Unlock a new game', ar: 'فتح لعبة جديدة' },
    buy: { en: 'Buy', ar: 'شراء' },
    invite_title: { en: '🔗 Invite & Earn', ar: '🔗 دعوة وربح' },
    invite_desc: { en: 'Send the link to your friends, each person who registers via your link = +20 Points for you', ar: 'أرسل الرابط إلى أصدقائك، كل شخص يسجّل عبر رابطك = +20 نقطة لك' },
    copy_link: { en: '📋 Copy Link', ar: '📋 نسخ الرابط' },
    share: { en: '📤 Share', ar: '📤 مشاركة' },
    news_title: { en: '📢 Website News', ar: '📢 أخبار الموقع' },
    news_1: { en: 'You are ready to read a story 🔥', ar: 'أنت جاهز لقراءة قصة 🔥' },
    news_1_desc: { en: 'True stories that inspire you and push you forward', ar: 'قصص حقيقية تُلهمك وتدفعك إلى الأمام' },
    read_now: { en: 'READ NOW →', ar: 'اقرأ الآن ←' },
    news_2: { en: 'You can play some games', ar: 'يمكنك لعب بعض الألعاب' },
    news_2_desc: { en: 'New - Moments of challenge, fun and focus', ar: 'جديد - لحظات من التحدي والمتعة والتركيز' },
    play_now: { en: 'PLAY NOW →', ar: 'العب الآن ←' },
    start_journey: { en: 'Start The Journey - START JOURNEY 🚀', ar: 'ابدأ الرحلة 🚀' },
    visitors: { en: 'Real Visitors', ar: 'زوار حقيقيون' },
    satisfaction: { en: '% Satisfaction', ar: 'نسبة الرضا %' },
    support: { en: 'Hours Support', ar: 'ساعات الدعم' },
    why_diff: { en: 'Why we are different', ar: 'لماذا نحن مختلفون' },
    fast: { en: 'Fast', ar: 'سريع' },
    fast_desc: { en: 'A lightweight website that works fast', ar: 'موقع خفيف يعمل بسرعة' },
    secure: { en: 'Secure', ar: 'آمن' },
    secure_desc: { en: 'Full protection for your data', ar: 'حماية كاملة لبياناتك' },
    modern: { en: 'Modern', ar: 'عصري' },
    modern_desc: { en: 'world class website design', ar: 'تصميم موقع من الطراز العالمي' },
    gallery: { en: '📸 Photo Gallery', ar: '📸 معرض الصور' },
    show_more: { en: '📸 Show more images', ar: '📸 عرض المزيد من الصور' },
    more: { en: '⋮ MORE ▼', ar: '⋮ المزيد ▼' },
    setting: { en: '⚙️ Setting', ar: '⚙️ الإعدادات' },
    setting_desc: { en: 'Premium settings coming soon', ar: 'إعدادات مميزة قادمة قريبًا' },
    about_site: { en: '📄 About site', ar: '📄 حول الموقع' },
    about_desc: { en: 'This is a new website - world class version', ar: 'هذا موقع جديد - نسخة من الطراز العالمي' },
    click_here: { en: 'Click here', ar: 'اضغط هنا' },
    sign_out: { en: '🚪 Sign out', ar: '🚪 تسجيل الخروج' },
    back: { en: 'Back', ar: 'عودة' },
    your_account: { en: '🚪 Your Account', ar: '🚪 حسابك' },
    not_logged: { en: 'You are not logged in - Log in to save your points', ar: 'أنت غير مسجّل الدخول - سجّل الدخول لحفظ نقاطك' },
    sign_out_btn: { en: 'Sign Out', ar: 'تسجيل الخروج' },
    rate_title: { en: '⭐ Rate the Website', ar: '⭐ قيّم الموقع' },
    rate_desc: { en: 'Did you like SEH? Give us your rating', ar: 'هل أعجبك SEH؟ امنحنا تقييمك' },
    avg_rating: { en: 'Average Rating:', ar: 'متوسط التقييم:' },
    report_title: { en: '🚨 Report a Problem', ar: '🚨 التبليغ عن مشكلة' },
    rep_home: { en: 'Home Page', ar: 'الصفحة الرئيسية' },
    rep_game: { en: 'Games', ar: 'الألعاب' },
    rep_stories: { en: 'Stories', ar: 'القصص' },
    rep_info: { en: 'INFO', ar: 'معلوماتي' },
    rep_login: { en: 'Login', ar: 'تسجيل الدخول' },
    rep_other: { en: 'Other', ar: 'أخرى' },
    send_report: { en: 'Send Report', ar: 'إرسال البلاغ' },
    visit_google: { en: 'Visit google', ar: 'زيارة غوغل' },
    visit_fb: { en: 'Visit facebook', ar: 'زيارة فيسبوك' },
    rights: { en: '© 2026 All Rights Reserved', ar: '© 2026 جميع الحقوق محفوظة' },
    login: { en: 'Login', ar: 'تسجيل الدخول' },
    no_account: { en: 'You do not have an account? Create an account', ar: 'ليس لديك حساب؟ أنشئ حسابًا' },
    forgot: { en: 'Forgot password? Click here to reset it', ar: 'نسيت كلمة المرور؟ اضغط هنا لإعادة تعيينها' },
    cancel: { en: 'Cancel', ar: 'إلغاء' },
    privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    cgu: { en: 'Terms of Use (CGU)', ar: 'شروط الاستخدام' },
    contact: { en: 'Contact Us', ar: 'اتصل بنا' },
    about_us: { en: 'About Us', ar: 'من نحن' },
    cookies: { en: 'Cookie settings', ar: 'إعدادات ملفات تعريف الارتباط' },
        offline: { en: '📱 OFFLINE', ar: '📱 دون اتصال' },
    online: { en: '🌐 ONLINE', ar: '🌐 عبر الإنترنت' },
    daily: { en: 'Daily Reward', ar: 'المكافأة اليومية' },
    claim: { en: 'Claim +5 ⭐ Today', ar: 'احصل على +5 ⭐ اليوم' },
    game_title: { en: '🎮 Choose Your Game', ar: '🎮 اختر لعبتك' },
    game_sub: { en: 'Click on an image to play - 8 Games', ar: 'اضغط على صورة للعب - 8 ألعاب' },
    start_playing: { en: '🎮 START PLAYING', ar: '🎮 ابدأ اللعب' },
    challenge_party: { en: 'Challenge Party', ar: 'حفلة التحدي' },
    challenge_desc: { en: '2-6 Players • Challenges', ar: '2-6 لاعبين • تحديات' },
    xo_title: { en: 'Tic Tac Toe (X O)', ar: 'لعبة X O' },
    xo_desc: { en: 'VS Friend / VS Computer / Online', ar: 'ضد صديق / ضد الحاسوب / عبر الإنترنت' },
    rps_title: { en: 'Rock Paper Scissors', ar: 'حجر ورقة مقص' },
    rps_desc: { en: 'Win 5 = +10 Points', ar: 'الفوز 5 مرات = +10 نقاط' },
    dama_title: { en: 'Checkers', ar: 'لعبة الداما' },
    dama_desc: { en: 'VS Friend / VS Computer', ar: 'ضد صديق / ضد الحاسوب' },
    memory_title: { en: 'Memory Game', ar: 'لعبة الذاكرة' },
    memory_desc: { en: 'Find all matching pairs', ar: 'اعثر على كل الأزواج المتشابهة' },
    quiz_title: { en: 'Quiz - Questions', ar: 'الاختبار - أسئلة' },
    quiz_desc: { en: '5 Groups • Are you smart?', ar: '5 مجموعات • هل أنت ذكي؟' },
    new: { en: 'NEW', ar: 'جديد' },
    word_title: { en: '🔤 Guess The Word', ar: '🔤 خمّن الكلمة' },
    word_desc: { en: '5 Words = +10 Points', ar: '5 كلمات = +10 نقاط' },
    simon_title: { en: '🎵 Fast Memory', ar: '🎵 الذاكرة السريعة' },
    simon_desc: { en: '5 Levels = +10 Points', ar: '5 مستويات = +10 نقاط' },
    back_games: { en: '⬅ Back to Games', ar: '⬅ العودة إلى الألعاب' },
    vs_friend: { en: '👤 VS Friend', ar: '👤 ضد صديق' },
    vs_comp: { en: '🤖 VS Computer', ar: '🤖 ضد الحاسوب' },
    vs_online: { en: '🌐 ONLINE', ar: '🌐 عبر الإنترنت' },
    play_again: { en: 'Play Again', ar: 'العب مرة أخرى' },
    done: { en: 'Done ✅', ar: 'تم ✅' },
    skip: { en: 'Skip ❌', ar: 'تخطي ❌' },
    guess_btn: { en: 'Guess!', ar: 'خمّن!' },
    host: { en: '👑 I am Host - Create Link', ar: '👑 أنا المضيف - إنشاء رابط' },
    guest: { en: '👤 I am Guest - Join', ar: '👤 أنا الضيف - انضمام' },
    join_room: { en: 'Join Room →', ar: 'دخول الغرفة ←' },
    copy_link: { en: '📋 Copy Link & Send to Friend', ar: '📋 نسخ الرابط وإرساله إلى صديق' },
    home_link: { en: 'Home', ar: 'الرئيسية' },
    stories_title: { en: '📚 10 Stories', ar: '📚 10 قصص' },
    read_now: { en: '📖 READ A STORY NOW', ar: '📖 اقرأ قصة الآن' },
    points: { en: 'Points', ar: 'النقاط' },
    home_link: { en: 'Home', ar: 'الرئيسية' },
        info_title: { en: 'My Profile & Account – SEH World', ar: 'ملفي وحسابي – عالم SEH' },
    welcome_back: { en: 'Welcome Back 👋', ar: 'مرحباً بعودتك 👋' },
    signup_first: { en: 'Sign Up - First Time', ar: 'إنشاء حساب - أول مرة' },
    signup_sub: { en: 'Create your account, only one time', ar: 'أنشئ حسابك، مرة واحدة فقط' },
    personal_info: { en: 'PERSONAL INFORMATION', ar: 'المعلومات الشخصية' },
    name_label: { en: 'Name:', ar: 'الاسم:' },
    family_label: { en: 'Family name:', ar: 'الاسم العائلي:' },
    phone_label: { en: 'Phone number:', ar: 'رقم الهاتف:' },
    age_label: { en: 'Age:', ar: 'العمر:' },
    email_label: { en: 'Email:', ar: 'البريد الإلكتروني:' },
    password_label: { en: 'Password:', ar: 'كلمة السر:' },
    show_pass: { en: 'Show password', ar: 'إظهار كلمة السر' },
    forgot_pass: { en: 'Forgot password?', ar: 'نسيت كلمة السر؟' },
    login_btn: { en: 'LOGIN ➡️', ar: 'تسجيل الدخول ➡️' },
    no_account: { en: 'No account yet?', ar: 'ليس لديك حساب بعد؟' },
    create_one: { en: 'Create one', ar: 'أنشئ واحداً' },
    more_info: { en: 'More information:', ar: 'معلومات إضافية:' },
    marital_label: { en: 'Marital status:', ar: 'الحالة العائلية:' },
    address_label: { en: 'Address:', ar: 'العنوان:' },
    next_btn: { en: 'NEXT ➡️', ar: 'التالي ➡️' },
    already_have: { en: 'Already have an account?', ar: 'لديك حساب بالفعل؟' },
    back_btn: { en: '⬅️ Back', ar: '⬅️ رجوع' },
    gender_label: { en: 'Gender', ar: 'الجنس' },
    time_label: { en: 'The Time', ar: 'الوقت' },
    enter_time: { en: 'Enter the time', ar: 'أدخل الوقت' },
    lang_hobby: { en: 'LANGUAGE AND HOBBIES', ar: 'اللغات والهوايات' },
    languages_title: { en: 'Languages', ar: 'اللغات' },
    hobbies_title: { en: 'Hobbies', ar: 'الهوايات' },
    choose_hobby: { en: 'Choose the best hobby:', ar: 'اختر أفضل هواية:' },
    hobby_note: { en: '(Used only for your profile, not for password recovery)', ar: '(تُستخدم لملفك فقط، وليس لاستعادة كلمة السر)' },
    confirm_save: { en: '✅ CONFIRM & SAVE', ar: '✅ تأكيد وحفظ' },
    forgot_title: { en: '🔒 Forgot Password?', ar: '🔒 نسيت كلمة السر؟' },
    forgot_desc: { en: 'We will send you a secure link to your email to reset your password.', ar: 'سنرسل لك رابطاً آمناً إلى بريدك لإعادة تعيين كلمة السر.' },
    send_reset: { en: 'Send Reset Link', ar: 'إرسال رابط الاستعادة' },
    cancel_btn: { en: 'Cancel', ar: 'إلغاء' },
    edit_info: { en: '✏️ Edit My Info', ar: '✏️ تعديل معلوماتي' },
    go_games: { en: '🎮 Go To Games', ar: '🎮 اذهب إلى الألعاب' },
    logout_btn: { en: '🚪 Logout', ar: '🚪 تسجيل الخروج' },
    delete_btn: { en: '🗑️ Delete My Account', ar: '🗑️ حذف حسابي' },
    click_photo: { en: 'Click on the photo to change it 📸', ar: 'اضغط على الصورة لتغييرها 📸' },
    days_label: { en: '📅 Days with us', ar: '📅 أيام معنا' },
    step1_title: { en: 'Personal Info', ar: 'المعلومات الشخصية' },
    home_link: { en: 'Home', ar: 'الرئيسية' },
    home_link: { en: 'Home', ar: 'الرئيسية' },
    // ===== SHOP + MY DIARY - EN is base, AR is Fusha =====
    shop_title: { en: '🛒 Points Shop', ar: '🛒 متجر النقاط' },
    shop_sub: { en: 'Buy with your points - Real items, real effects', ar: 'اشترِ بنقاطك - عناصر حقيقية ذات تأثير فعلي' },
    your_points: { en: 'You have', ar: 'لديك' },
    points_word: { en: 'points', ar: 'نقطة' },
    my_items: { en: 'My Items', ar: 'عناصري' },
    choose_color: { en: 'Choose Site Color:', ar: 'اختر لون الموقع:' },
    enable_sounds: { en: 'Enable Sounds', ar: 'تفعيل الأصوات' },
    diary_title: { en: '📝 My Diary - Private', ar: '📝 مذكراتي - خاصة' },
    diary_sub: { en: 'Only you can see this. Saved on your phone.', ar: 'أنت فقط من يستطيع رؤيتها. محفوظة على هاتفك.' },
    diary_unlock: { en: '🔓 Unlock', ar: '🔓 فتح' },
    diary_pin_hint: { en: 'First time? Write a PIN and Unlock, it will be saved.', ar: 'أول مرة؟ اكتب رمزًا ثم اضغط على فتح، وسيتم حفظه.' },
    diary_save: { en: '💾 Save in My Diary (+5 Points)', ar: '💾 حفظ في مذكراتي (+5 نقاط)' },
    diary_lock: { en: '🔒 Lock Diary', ar: '🔒 قفل المذكرات' },
    buy_btn: { en: 'Buy', ar: 'شراء' },
    shop_go_title: { en: '🛒 Points Shop', ar: '🛒 متجر النقاط' },
    shop_go_desc: { en: 'Shop is now in GAME - VIP, Color, Dark Mode, Extra Game, My Diary, Sound Pack', ar: 'أصبح المتجر الآن في صفحة الألعاب - VIP، اللون، الوضع الداكن، لعبة إضافية، مذكراتي، حزمة الأصوات' },
    shop_go_btn: { en: '🛒 Go to Shop in GAME →', ar: '🛒 الذهاب إلى المتجر في الألعاب →' },
  },
  apply() {
    document.documentElement.lang = this.current === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = this.dict[key];
      if (entry) el.innerText = entry[this.current];
    });
    const btn = document.getElementById('sehLangBtn');
    if (btn) btn.innerText = this.current === 'en' ? '🌐 عربي' : '🌐 English';
    const aboutAr = document.getElementById('aboutAr');
    const aboutEn = document.getElementById('aboutEn');
    const aboutHr = document.getElementById('aboutHr');
    if (aboutAr && aboutEn) {
      if (this.current === 'ar') { aboutAr.style.display='block'; aboutEn.style.display='none'; if(aboutHr) aboutHr.style.display='none'; }
      else { aboutAr.style.display='none'; aboutEn.style.display='block'; if(aboutHr) aboutHr.style.display='none'; }
    }
    const reportMsg = document.getElementById('reportMsg');
    if (reportMsg) reportMsg.placeholder = this.current==='ar' ? 'ما هي المشكلة التي واجهتها؟ اشرحها لنا...' : 'What problem did you encounter? Explain it to us...';
    const search = document.getElementById('siteSearch');
    if (search) search.placeholder = this.current==='ar' ? 'ابحث في الموقع' : 'Search in the site';
    const authName = document.getElementById('authName');
    if (authName) authName.placeholder = this.current==='ar' ? 'اسمك (لإنشاء حساب فقط)' : 'Your Name (For Sign Up Only)';
    const authEmail = document.getElementById('authEmail');
    if (authEmail) authEmail.placeholder = this.current==='ar' ? 'البريد الإلكتروني' : 'Email';
    const authPass = document.getElementById('authPass');
    if (authPass) authPass.placeholder = this.current==='ar' ? 'كلمة المرور' : 'Password';
    const inv = document.getElementById('inviteLink');
    if (inv && !inv.value.includes('http')) inv.value = this.current==='ar' ? 'سجّل الدخول لعرض رابط الدعوة الخاص بك' : 'Log in to show your invite link';
  },
  toggle() {
    this.current = this.current === 'en' ? 'ar' : 'en';
    localStorage.setItem('seh_lang', this.current);
    this.apply();
    if (typeof newChallenge === 'function') newChallenge();
  }
};
window.SEH_LANG = SEH_LANG;
document.addEventListener('DOMContentLoaded', () => SEH_LANG.apply());


// SHOP + DIARY - EN base, AR Fusha
const SEH_SHOP_DICT = {
  en: { shop_title:"🛒 Points Shop", shop_sub:"Buy with your points - Real items, real effects", your_points:"You have", points_word:"points", my_items:"My Items", choose_color:"Choose Site Color:", enable_sounds:"Enable Sounds", diary_title:"📝 My Diary - Private", diary_sub:"Only you can see this. Saved on your phone.", diary_unlock:"🔓 Unlock", diary_pin_hint:"First time? Write a PIN and Unlock, it will be saved.", diary_save:"💾 Save in My Diary (+5 Points)", diary_lock:"🔒 Lock Diary", buy_btn:"Buy" },
  ar: { shop_title:"🛒 متجر النقاط", shop_sub:"اشترِ بنقاطك - عناصر حقيقية ذات تأثير فعلي", your_points:"لديك", points_word:"نقطة", my_items:"عناصري", choose_color:"اختر لون الموقع:", enable_sounds:"تفعيل الأصوات", diary_title:"📝 مذكراتي - خاصة", diary_sub:"أنت فقط من يستطيع رؤيتها. محفوظة على هاتفك.", diary_unlock:"🔓 فتح", diary_pin_hint:"أول مرة؟ اكتب رمزًا ثم اضغط على فتح، وسيتم حفظه.", diary_save:"💾 حفظ في مذكراتي (+5 نقاط)", diary_lock:"🔒 قفل المذكرات", buy_btn:"شراء" }
};
function applyShopLang(lang){
  let t = SEH_SHOP_DICT[lang] || SEH_SHOP_DICT.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    let k = el.getAttribute('data-i18n');
    if(t[k]) el.textContent = t[k];
  });
}
if(window.SEH_LANG){
  let _orig = window.SEH_LANG.toggle.bind(window.SEH_LANG);
  window.SEH_LANG.toggle = function(){ _orig(); setTimeout(()=> applyShopLang(localStorage.getItem('seh_lang')||'en'), 100); };
  setTimeout(()=> applyShopLang(localStorage.getItem('seh_lang')||'en'), 500);
}