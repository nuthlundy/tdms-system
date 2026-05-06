// TDMS - Training and Development Management System
// Main Application JavaScript

// ==================== KHMER LUNAR CALENDAR HOLIDAYS ====================
const khmerLunarHolidays = {
    '2024': [
        { date: '2024-01-01', name: 'New Year\'s Day' },
        { date: '2024-01-07', name: 'Victory Over Genocide Day' },
        { date: '2024-03-08', name: 'International Women\'s Day' },
        { date: '2024-04-13', name: 'Khmer New Year (Moha Songkran)' },
        { date: '2024-04-14', name: 'Khmer New Year (Virak Wanabat)' },
        { date: '2024-04-15', name: 'Khmer New Year (Tngai Leang Saka)' },
        { date: '2024-04-16', name: 'Khmer New Year Holiday' },
        { date: '2024-05-01', name: 'International Labour Day' },
        { date: '2024-05-14', name: 'King\'s Birthday' },
        { date: '2024-05-22', name: 'Royal Ploughing Ceremony' },
        { date: '2024-06-18', name: 'Queen Mother\'s Birthday' },
        { date: '2024-09-24', name: 'Ancestors\' Day (Pchum Ben)' },
        { date: '2024-09-25', name: 'Pchum Ben Holiday' },
        { date: '2024-09-26', name: 'Pchum Ben Holiday' },
        { date: '2024-09-27', name: 'Pchum Ben Holiday' },
        { date: '2024-10-15', name: 'King Norodom Sihamoni Coronation' },
        { date: '2024-10-23', name: 'Paris Peace Agreement Day' },
        { date: '2024-11-09', name: 'Independence Day' },
        { date: '2024-11-14', name: 'Water Festival (Bon Om Touk)' },
        { date: '2024-11-15', name: 'Water Festival Holiday' },
        { date: '2024-11-16', name: 'Water Festival Holiday' },
    ],
    '2025': [
        { date: '2025-01-01', name: 'New Year\'s Day' },
        { date: '2025-01-07', name: 'Victory Over Genocide Day' },
        { date: '2025-03-08', name: 'International Women\'s Day' },
        { date: '2025-04-14', name: 'Khmer New Year (Moha Songkran)' },
        { date: '2025-04-15', name: 'Khmer New Year (Virak Wanabat)' },
        { date: '2025-04-16', name: 'Khmer New Year (Tngai Leang Saka)' },
        { date: '2025-04-17', name: 'Khmer New Year Holiday' },
        { date: '2025-05-01', name: 'International Labour Day' },
        { date: '2025-05-14', name: 'King\'s Birthday' },
        { date: '2025-05-15', name: 'Royal Ploughing Ceremony' },
        { date: '2025-06-18', name: 'Queen Mother\'s Birthday' },
        { date: '2025-09-24', name: 'Ancestors\' Day (Pchum Ben)' },
        { date: '2025-09-25', name: 'Pchum Ben Holiday' },
        { date: '2025-09-26', name: 'Pchum Ben Holiday' },
        { date: '2025-09-27', name: 'Pchum Ben Holiday' },
        { date: '2025-10-15', name: 'King Norodom Sihamoni Coronation' },
        { date: '2025-10-23', name: 'Paris Peace Agreement Day' },
        { date: '2025-11-09', name: 'Independence Day' },
        { date: '2025-11-05', name: 'Water Festival (Bon Om Touk)' },
        { date: '2025-11-06', name: 'Water Festival Holiday' },
        { date: '2025-11-07', name: 'Water Festival Holiday' },
    ],
    '2026': [
        { date: '2026-01-01', name: 'New Year\'s Day' },
        { date: '2026-01-07', name: 'Victory Over Genocide Day' },
        { date: '2026-03-08', name: 'International Women\'s Day' },
        { date: '2026-04-13', name: 'Meak Bochea (Magha Puja)' },
        { date: '2026-04-14', name: 'Khmer New Year (Moha Songkran)' },
        { date: '2026-04-15', name: 'Khmer New Year (Virak Wanabat)' },
        { date: '2026-04-16', name: 'Khmer New Year (Tngai Leang Saka)' },
        { date: '2026-04-17', name: 'Khmer New Year Holiday' },
        { date: '2026-05-01', name: 'International Labour Day' },
        { date: '2026-05-14', name: 'King\'s Birthday' },
        { date: '2026-05-15', name: 'Royal Ploughing Ceremony' },
        { date: '2026-06-18', name: 'Queen Mother\'s Birthday' },
        { date: '2026-09-24', name: 'Ancestors\' Day (Pchum Ben)' },
        { date: '2026-09-25', name: 'Pchum Ben Holiday' },
        { date: '2026-09-26', name: 'Pchum Ben Holiday' },
        { date: '2026-09-27', name: 'Pchum Ben Holiday' },
        { date: '2026-10-15', name: 'King Norodom Sihamoni Coronation' },
        { date: '2026-10-23', name: 'Paris Peace Agreement Day' },
        { date: '2026-11-09', name: 'Independence Day' },
        { date: '2026-11-24', name: 'Water Festival (Bon Om Touk)' },
        { date: '2026-11-25', name: 'Water Festival Holiday' },
        { date: '2026-11-26', name: 'Water Festival Holiday' },
    ],
};

const khmerLunarPhases = {
    '2024': [
        { date: '2024-01-25', name: 'Full Moon of Meak' },
        { date: '2024-02-24', name: 'Full Moon of Phalkun' },
        { date: '2024-03-25', name: 'Full Moon of Cheat' },
        { date: '2024-04-23', name: 'Full Moon of Visak' },
        { date: '2024-05-23', name: 'Full Moon of Jeth' },
        { date: '2024-06-22', name: 'Full Moon of Asadh' },
        { date: '2024-07-21', name: 'Full Moon of Sravanh' },
        { date: '2024-08-19', name: 'Full Moon of Phtrabat' },
        { date: '2024-09-18', name: 'Full Moon of Assoche' },
        { date: '2024-10-17', name: 'Full Moon of Kattak' },
        { date: '2024-11-15', name: 'Full Moon of Miseak' },
        { date: '2024-12-15', name: 'Full Moon of Boss' },
    ],
    '2025': [
        { date: '2025-01-13', name: 'Full Moon of Boss' },
        { date: '2025-02-12', name: 'Full Moon of Meak' },
        { date: '2025-03-14', name: 'Full Moon of Phalkun' },
        { date: '2025-04-12', name: 'Full Moon of Cheat' },
        { date: '2025-05-12', name: 'Full Moon of Visak' },
        { date: '2025-06-11', name: 'Full Moon of Jeth' },
        { date: '2025-07-10', name: 'Full Moon of Asadh' },
        { date: '2025-08-09', name: 'Full Moon of Sravanh' },
        { date: '2025-09-07', name: 'Full Moon of Phtrabat' },
        { date: '2025-10-07', name: 'Full Moon of Assoche' },
        { date: '2025-11-05', name: 'Full Moon of Kattak' },
        { date: '2025-12-04', name: 'Full Moon of Miseak' },
    ],
    '2026': [
        { date: '2026-01-03', name: 'Full Moon of Miseak' },
        { date: '2026-02-01', name: 'Full Moon of Boss' },
        { date: '2026-03-03', name: 'Full Moon of Meak' },
        { date: '2026-04-01', name: 'Full Moon of Phalkun' },
        { date: '2026-05-01', name: 'Full Moon of Cheat' },
        { date: '2026-05-31', name: 'Full Moon of Visak' },
        { date: '2026-06-29', name: 'Full Moon of Jeth' },
        { date: '2026-07-29', name: 'Full Moon of Asadh' },
        { date: '2026-08-28', name: 'Full Moon of Sravanh' },
        { date: '2026-09-26', name: 'Full Moon of Phtrabat' },
        { date: '2026-10-26', name: 'Full Moon of Assoche' },
        { date: '2026-11-24', name: 'Full Moon of Kattak' },
        { date: '2026-12-24', name: 'Full Moon of Miseak' },
    ],
};

const cambodianHolidays = [];
Object.values(khmerLunarHolidays).forEach(yearHolidays => {
    yearHolidays.forEach(h => cambodianHolidays.push(h.date));
});

// ==================== DATA STORE ====================
const DataStore = {
    init() {
        if (!localStorage.getItem('tdms_initialized')) {
            const initialData = {
                trainings: [],
                requests: [],
                attendance: [],
                evaluations: [],
                reports: [],
                tna: [],
                nextId: 1
            };
            localStorage.setItem('tdms_data', JSON.stringify(initialData));
            localStorage.setItem('tdms_initialized', 'true');
        }
        // Initialize PDF storage
        if (!localStorage.getItem('tdms_files')) {
            localStorage.setItem('tdms_files', JSON.stringify({}));
        }
    },

    getData() {
        return JSON.parse(localStorage.getItem('tdms_data')) || this.resetData();
    },

    saveData(data) {
        localStorage.setItem('tdms_data', JSON.stringify(data));
    },

    saveFile(id, fileData) {
        const files = JSON.parse(localStorage.getItem('tdms_files')) || {};
        files[id] = fileData;
        localStorage.setItem('tdms_files', JSON.stringify(files));
    },

    getFile(id) {
        const files = JSON.parse(localStorage.getItem('tdms_files')) || {};
        return files[id];
    },

    deleteFile(id) {
        const files = JSON.parse(localStorage.getItem('tdms_files')) || {};
        delete files[id];
        localStorage.setItem('tdms_files', JSON.stringify(files));
    },

    resetData() {
        const data = {
            trainings: [],
            requests: [],
            attendance: [],
            evaluations: [],
            reports: [],
            tna: [],
            nextId: 1
        };
        this.saveData(data);
        localStorage.setItem('tdms_files', JSON.stringify({}));
        return data;
    },

    addTrainingRequest(request) {
        const data = this.getData();
        request.id = data.nextId++;
        request.status = 'pending';
        request.createdAt = new Date().toISOString();
        data.requests.push(request);
        
        const training = {
            id: request.id,
            name: request.requesterName,
            topic: request.trainingTopic,
            date: request.trainingDate,
            type: request.trainingType,
            budget: request.budget,
            status: 'scheduled',
            fileName: request.fileName
        };
        data.trainings.push(training);
        this.saveData(data);
        return request;
    },

    updateTrainingRequest(id, updatedFields) {
        const data = this.getData();
        const request = data.requests.find(r => r.id === id);
        if (request) {
            Object.assign(request, updatedFields);
            this.saveData(data);
            const training = data.trainings.find(t => t.id === id);
            if (training) {
                training.name = updatedFields.requesterName || training.name;
                training.topic = updatedFields.trainingTopic || training.topic;
                training.date = updatedFields.trainingDate || training.date;
                training.type = updatedFields.trainingType || training.type;
                training.budget = updatedFields.budget || training.budget;
                this.saveData(data);
            }
            return request;
        }
        return null;
    },

    addTNA(tna) {
        const data = this.getData();
        tna.id = data.nextId++;
        tna.createdAt = new Date().toISOString();
        data.tna.push(tna);
        this.saveData(data);
        return tna;
    },

    addAttendance(record) {
        const data = this.getData();
        record.id = data.nextId++;
        record.createdAt = new Date().toISOString();
        data.attendance.push(record);
        this.saveData(data);
        return record;
    },

    updateAttendance(id, updatedFields) {
        const data = this.getData();
        const attendance = data.attendance.find(a => a.id === id);
        if (attendance) {
            Object.assign(attendance, updatedFields);
            this.saveData(data);
            return attendance;
        }
        return null;
    },

    addEvaluation(evaluation) {
        const data = this.getData();
        evaluation.id = data.nextId++;
        evaluation.createdAt = new Date().toISOString();
        data.evaluations.push(evaluation);
        this.saveData(data);
        return evaluation;
    },

    addReport(report) {
        const data = this.getData();
        report.id = data.nextId++;
        report.createdAt = new Date().toISOString();
        data.reports.push(report);
        this.saveData(data);
        return report;
    },

    updateTraining(id, updatedFields) {
        const data = this.getData();
        const training = data.trainings.find(t => t.id === id);
        if (training) {
            Object.assign(training, updatedFields);
            this.saveData(data);
            const request = data.requests.find(r => r.id === id);
            if (request) {
                request.requesterName = updatedFields.name || request.requesterName;
                request.trainingTopic = updatedFields.topic || request.trainingTopic;
                request.trainingDate = updatedFields.date || request.trainingDate;
                request.trainingType = updatedFields.type || request.trainingType;
                request.budget = updatedFields.budget || request.budget;
                this.saveData(data);
            }
            return training;
        }
        return null;
    }
};

// ==================== AUTHENTICATION ====================
const Auth = {
    checkAuth() {
        return sessionStorage.getItem('tdms_logged_in') === 'true';
    },

    login(username, password) {
        const users = JSON.parse(localStorage.getItem('tdms_users') || '{}');
        const sessions = JSON.parse(localStorage.getItem('tdms_sessions') || '{}');
        if (sessions[username] && sessions[username] === password) {
            sessionStorage.setItem('tdms_logged_in', 'true');
            return true;
        }
        if (users[username] && users[username] === password) {
            sessionStorage.setItem('tdms_logged_in', 'true');
            return true;
        }
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('tdms_logged_in', 'true');
            return true;
        }
        return false;
    },

    logout() {
        sessionStorage.removeItem('tdms_logged_in');
        window.location.href = 'login.html';
    }
};

    // ==================== LOGIN PAGE LOGIC ====================
if (window.location.pathname.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    const loginBtn = document.getElementById('loginBtn');
    const loginBtnText = document.getElementById('loginBtnText');

    function showLoading() {
        loginBtn.disabled = true;
        loginBtnText.textContent = 'Signing in...';
        loginBtn.style.opacity = '0.7';
    }

    function hideLoading() {
        loginBtn.disabled = false;
        loginBtnText.textContent = 'Sign In';
        loginBtn.style.opacity = '1';
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
        passwordInput.focus();
        passwordInput.select();
    }

    function clearError() {
        errorMsg.textContent = '';
        errorMsg.style.display = 'none';
    }

    usernameInput.addEventListener('input', clearError);
    passwordInput.addEventListener('input', clearError);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username) {
            showError('Please enter your username.');
            usernameInput.focus();
            return;
        }

        if (!password) {
            showError('Please enter your password.');
            passwordInput.focus();
            return;
        }

        showLoading();

        setTimeout(function() {
            if (Auth.login(username, password)) {
                errorMsg.textContent = 'Login successful! Redirecting...';
                errorMsg.style.color = '#28a745';
                errorMsg.style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 600);
            } else {
                hideLoading();
                showError('Invalid username or password. Please try again.');
            }
        }, 800);
    });

    usernameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && usernameInput.value.trim()) {
            passwordInput.focus();
        }
    });

    // Forgot Password Logic - Multi-step OTP flow
    const forgotLink = document.getElementById('forgotPasswordLink');
    const forgotModal = document.getElementById('forgotModal');
    const forgotModalClose = document.getElementById('forgotModalClose');
    const forgotModalTitle = document.getElementById('forgotModalTitle');

    const step1 = document.getElementById('forgotStep1');
    const step2 = document.getElementById('forgotStep2');
    const step3 = document.getElementById('forgotStep3');
    const step4 = document.getElementById('forgotStep4');

    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');
    const resendOtpBtn = document.getElementById('resendOtpBtn');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');
    const backToLoginBtn = document.getElementById('backToLoginBtn');

    const displayOtpCode = document.getElementById('displayOtpCode');
    const otpTimer = document.getElementById('otpTimer');
    const resetMessage = document.getElementById('resetMessage');
    const otpMessage = document.getElementById('otpMessage');
    const passwordMessage = document.getElementById('passwordMessage');

    let generatedOtp = '';
    let otpExpiryTime = null;
    let otpTimerInterval = null;
    let currentResetUsername = '';

    function generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    function showStep(step) {
        [step1, step2, step3, step4].forEach(s => s.style.display = 'none');
        step.style.display = 'block';
        step.style.animation = 'forgotStepIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    }

    function showMessage(element, message, type) {
        element.style.display = 'block';
        element.textContent = message;
        element.className = 'forgot-message forgot-message-' + type;
        element.style.animation = 'forgotMsgIn 0.3s ease forwards';
    }

    function clearMessages() {
        [resetMessage, otpMessage, passwordMessage].forEach(m => {
            m.style.display = 'none';
            m.textContent = '';
        });
    }

    function startOtpTimer(minutes) {
        let totalSeconds = minutes * 60;
        if (otpTimerInterval) clearInterval(otpTimerInterval);

        otpTimerInterval = setInterval(function() {
            totalSeconds--;
            if (totalSeconds <= 0) {
                clearInterval(otpTimerInterval);
                otpTimer.textContent = '00:00';
                verifyOtpBtn.disabled = true;
                verifyOtpBtn.style.opacity = '0.5';
                resendOtpBtn.style.display = 'block';
                return;
            }
            const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const s = (totalSeconds % 60).toString().padStart(2, '0');
            otpTimer.textContent = m + ':' + s;
        }, 1000);
    }

    function resetForgotFlow() {
        if (otpTimerInterval) clearInterval(otpTimerInterval);
        currentResetUsername = '';
        generatedOtp = '';
        otpExpiryTime = null;
        document.getElementById('resetUsername').value = '';
        document.querySelectorAll('.otp-digit').forEach(d => d.value = '');
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
        clearMessages();
        showStep(step1);
        forgotModalTitle.textContent = 'Reset Password';
    }

    // Step 1: Send OTP
    sendOtpBtn.addEventListener('click', function() {
        const username = document.getElementById('resetUsername').value.trim();
        clearMessages();

        if (!username) {
            showMessage(resetMessage, 'Please enter your username', 'error');
            return;
        }

        // Check if user exists in stored users or default admin
        const users = JSON.parse(localStorage.getItem('tdms_users') || '{}');
        const userExists = username === 'admin' || users[username];

        if (!userExists) {
            showMessage(resetMessage, 'Username not found in our records', 'error');
            return;
        }

        sendOtpBtn.disabled = true;
        sendOtpBtn.innerHTML = '<span class="btn-loading"><span class="btn-spinner"></span> Sending...</span>';

        setTimeout(function() {
            generatedOtp = generateOtp();
            currentResetUsername = username;
            otpExpiryTime = Date.now() + 5 * 60 * 1000;
            displayOtpCode.textContent = generatedOtp;
            verifyOtpBtn.disabled = false;
            verifyOtpBtn.style.opacity = '1';
            resendOtpBtn.style.display = 'none';
            startOtpTimer(5);
            showStep(step2);
            forgotModalTitle.textContent = 'Verify Identity';
            document.querySelector('.otp-digit').focus();
            sendOtpBtn.disabled = false;
            sendOtpBtn.innerHTML = 'Send Verification Code';
        }, 1200);
    });

    // OTP input handling
    const otpDigits = document.querySelectorAll('.otp-digit');
    otpDigits.forEach(function(digit, index) {
        digit.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value && index < otpDigits.length - 1) {
                otpDigits[index + 1].focus();
            }
        });

        digit.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
                otpDigits[index - 1].focus();
            }
            if (e.key === 'Enter') {
                verifyOtpBtn.click();
            }
        });

        digit.addEventListener('paste', function(e) {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
            otpDigits.forEach(function(d, i) {
                if (pasteData[i]) {
                    d.value = pasteData[i];
                }
            });
            if (pasteData.length >= 6) {
                otpDigits[5].focus();
            }
        });
    });

    // Step 2: Verify OTP
    verifyOtpBtn.addEventListener('click', function() {
        clearMessages();
        const enteredOtp = Array.from(otpDigits).map(d => d.value).join('');

        if (enteredOtp.length < 6) {
            showMessage(otpMessage, 'Please enter the complete 6-digit code', 'error');
            return;
        }

        if (!otpExpiryTime || Date.now() > otpExpiryTime) {
            showMessage(otpMessage, 'Verification code has expired. Please resend.', 'error');
            return;
        }

        verifyOtpBtn.disabled = true;
        verifyOtpBtn.innerHTML = '<span class="btn-loading"><span class="btn-spinner"></span> Verifying...</span>';

        setTimeout(function() {
            if (enteredOtp === generatedOtp) {
                showStep(step3);
                forgotModalTitle.textContent = 'Create New Password';
                document.getElementById('newPassword').focus();
            } else {
                showMessage(otpMessage, 'Invalid verification code. Please try again.', 'error');
                otpDigits.forEach(d => d.value = '');
                otpDigits[0].focus();
            }
            verifyOtpBtn.disabled = false;
            verifyOtpBtn.innerHTML = 'Verify Code';
        }, 1000);
    });

    // Resend OTP
    resendOtpBtn.addEventListener('click', function() {
        generatedOtp = generateOtp();
        otpExpiryTime = Date.now() + 5 * 60 * 1000;
        displayOtpCode.textContent = generatedOtp;
        verifyOtpBtn.disabled = false;
        verifyOtpBtn.style.opacity = '1';
        resendOtpBtn.style.display = 'none';
        otpDigits.forEach(d => d.value = '');
        otpDigits[0].focus();
        startOtpTimer(5);
        showMessage(otpMessage, 'New verification code sent', 'success');
    });

    // Password visibility toggles for reset form
    const newPassToggle = document.getElementById('newPasswordToggle');
    const confirmPassToggle = document.getElementById('confirmPasswordToggle');
    const newEyeIcon = document.getElementById('newEyeIcon');
    const confirmEyeIcon = document.getElementById('confirmEyeIcon');
    let newPassVisible = false;
    let confirmPassVisible = false;

    if (newPassToggle) {
        newPassToggle.addEventListener('click', function() {
            newPassVisible = !newPassVisible;
            document.getElementById('newPassword').type = newPassVisible ? 'text' : 'password';
            newEyeIcon.innerHTML = newPassVisible
                ? '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
                : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
        });
    }

    if (confirmPassToggle) {
        confirmPassToggle.addEventListener('click', function() {
            confirmPassVisible = !confirmPassVisible;
            document.getElementById('confirmPassword').type = confirmPassVisible ? 'text' : 'password';
            confirmEyeIcon.innerHTML = confirmPassVisible
                ? '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
                : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
        });
    }

    // Password requirements checking
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const reqLength = document.getElementById('reqLength');
    const reqMatch = document.getElementById('reqMatch');

    function checkPasswordRequirements() {
        const newPass = newPassword.value;
        const confPass = confirmPassword.value;

        reqLength.classList.toggle('req-met', newPass.length >= 6);
        reqMatch.classList.toggle('req-met', newPass === confPass && confPass.length > 0);
    }

    if (newPassword) newPassword.addEventListener('input', checkPasswordRequirements);
    if (confirmPassword) confirmPassword.addEventListener('input', checkPasswordRequirements);

    // Step 3: Reset Password
    resetPasswordBtn.addEventListener('click', function() {
        clearMessages();
        const newPass = newPassword.value;
        const confPass = confirmPassword.value;

        if (!newPass || !confPass) {
            showMessage(passwordMessage, 'Please fill in both password fields', 'error');
            return;
        }

        if (newPass.length < 6) {
            showMessage(passwordMessage, 'Password must be at least 6 characters', 'error');
            return;
        }

        if (newPass !== confPass) {
            showMessage(passwordMessage, 'Passwords do not match', 'error');
            return;
        }

        resetPasswordBtn.disabled = true;
        resetPasswordBtn.innerHTML = '<span class="btn-loading"><span class="btn-spinner"></span> Updating...</span>';

        setTimeout(function() {
            const users = JSON.parse(localStorage.getItem('tdms_users') || '{}');
            users[currentResetUsername] = newPass;
            localStorage.setItem('tdms_users', JSON.stringify(users));

            const sessionData = JSON.parse(localStorage.getItem('tdms_sessions') || '{}');
            sessionData[currentResetUsername] = newPass;
            localStorage.setItem('tdms_sessions', JSON.stringify(sessionData));

            const verified = Auth.login(currentResetUsername, newPass);
            if (!verified) {
                sessionStorage.removeItem('tdms_logged_in');
            }

            if (otpTimerInterval) clearInterval(otpTimerInterval);
            showStep(step4);
            forgotModalTitle.textContent = 'Success';
            resetPasswordBtn.disabled = false;
            resetPasswordBtn.innerHTML = 'Reset Password';
        }, 1500);
    });

    // Step 4: Back to Login
    backToLoginBtn.addEventListener('click', function() {
        resetForgotFlow();
        forgotModal.classList.remove('active');
    });

    // Close modal handlers
    forgotLink.addEventListener('click', function(e) {
        e.preventDefault();
        resetForgotFlow();
        forgotModal.classList.add('active');
        setTimeout(function() {
            document.getElementById('resetUsername').focus();
        }, 100);
    });

    forgotModalClose.addEventListener('click', function() {
        resetForgotFlow();
        forgotModal.classList.remove('active');
    });

    forgotModal.addEventListener('click', function(e) {
        if (e.target === forgotModal) {
            resetForgotFlow();
            forgotModal.classList.remove('active');
        }
    });

    document.getElementById('resetUsername').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            sendOtpBtn.click();
        }
    });

    if (usernameInput) {
        setTimeout(function() { usernameInput.focus(); }, 300);
    }

    // Password visibility toggle
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    let passwordVisible = false;

    if (passwordToggle && passwordField) {
        passwordToggle.addEventListener('click', function() {
            passwordVisible = !passwordVisible;
            passwordField.type = passwordVisible ? 'text' : 'password';
            eyeIcon.innerHTML = passwordVisible
                ? '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
                : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
        });
    }

    // Generate floating particles
    const particlesContainer = document.getElementById('loginParticles');
    if (particlesContainer) {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'login-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.width = (Math.random() * 3 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            const colors = ['rgba(212,175,55,0.4)', 'rgba(240,136,62,0.3)', 'rgba(220,38,38,0.2)', 'rgba(30,64,175,0.3)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particlesContainer.appendChild(particle);
        }
    }
}

// ==================== MAIN APP LOGIC ====================
if (
    window.location.pathname.includes('index.html') ||
    window.location.pathname === '/'
) {
    if (!Auth.checkAuth()) {
        window.location.href = 'login.html';
    }

    DataStore.init();

    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const navItems = document.querySelectorAll('.nav-item');
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');

    let calendarInstance = null;

    // ==================== REAL-TIME CLOCK ====================
    function updateClock() {
        const datetimeEl = document.getElementById('systemDatetime');
        if (!datetimeEl) return;
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = days[now.getDay()];
        const month = months[now.getMonth()];
        const date = now.getDate();
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        datetimeEl.textContent = day + ', ' + month + ' ' + date + ', ' + year + '  ' + hours + ':' + minutes + ':' + seconds;
    }

    updateClock();
    setInterval(updateClock, 1000);

    // ==================== WELCOME MESSAGE ====================
    const welcomeMsg = document.getElementById('welcomeMessage');
    if (welcomeMsg) {
        welcomeMsg.addEventListener('animationend', function() {
            this.style.opacity = '1';
        });
    }

    const sunSVG = `<circle cx="12" cy="12" r="5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
    const moonSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>`;

    function setTheme(isNight) {
        document.body.classList.toggle('theme-night', isNight);
        document.body.classList.toggle('theme-day', !isNight);
        localStorage.setItem('tdms_theme', isNight ? 'night' : 'day');
        themeIcon.innerHTML = isNight ? sunSVG : moonSVG;
        updateChartColors(isNight);
    }

    function updateChartColors(isNight) {
        setTimeout(() => {
            const data = DataStore.getData();
            const activeModule = document.querySelector('.nav-item.active');
            if (activeModule && activeModule.dataset.module === 'dashboard') {
                renderDashboard();
            }
        }, 50);
    }

    const savedTheme = localStorage.getItem('tdms_theme');
    const isNight = savedTheme === 'night';
    setTheme(isNight);

    themeToggle.addEventListener('click', () => {
        const isNight = document.body.classList.contains('theme-night');
        setTheme(!isNight);
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });

    logoutBtn.addEventListener('click', () => Auth.logout());

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.querySelector('.modal-content').classList.remove('pdf-viewer');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.querySelector('.modal-content').classList.remove('pdf-viewer');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const module = this.dataset.module;
            loadModule(module);
        });
    });

    function loadModule(module) {
        switch(module) {
            case 'dashboard': renderDashboard(); break;
            case 'tna': renderTNA(); break;
            case 'request': renderRequest(); break;
            case 'record': renderRecord(); break;
            case 'attendance': renderAttendance(); break;
            case 'evaluation': renderEvaluation(); break;
            case 'calendar': renderCalendar(); break;
            case 'expenditure': renderExpenditure(); break;
            case 'report': renderReport(); break;
            case 'masterlist': renderMasterList(); break;
            case 'backup': renderBackup(); break;
            case 'reset': renderReset(); break;
        }
    }

    // ==================== DASHBOARD ====================
    function renderDashboard() {
        const data = DataStore.getData();
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        const trainingsThisYear = data.trainings.filter(t => 
            new Date(t.date).getFullYear() === currentYear
        );
        const trainingsThisMonth = trainingsThisYear.filter(t => 
            new Date(t.date).getMonth() === currentMonth
        );
        const internalCount = data.trainings.filter(t => t.type === 'Internal').length;
        const externalCount = data.trainings.filter(t => t.type === 'External').length;
        const totalBudget = data.trainings.reduce((sum, t) => sum + (parseFloat(t.budget) || 0), 0);

        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Dashboard</h2>
                <p>Training and Development Overview</p>
            </div>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${data.trainings.length}</div>
                    <div class="stat-label">Total Trainings</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${trainingsThisYear.length}</div>
                    <div class="stat-label">Trainings This Year</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${trainingsThisMonth.length}</div>
                    <div class="stat-label">Trainings This Month</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${internalCount}</div>
                    <div class="stat-label">Internal Trainings</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${externalCount}</div>
                    <div class="stat-label">External Trainings</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">$${totalBudget.toLocaleString()}</div>
                    <div class="stat-label">Training Budget</div>
                </div>
            </div>
            <div class="charts-grid">
                <div class="chart-container">
                    <h3>Monthly Training Trends</h3>
                    <canvas id="monthlyChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Training Type Distribution</h3>
                    <canvas id="typeChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Budget Allocation</h3>
                    <canvas id="budgetChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Internal vs External</h3>
                    <canvas id="ratioChart"></canvas>
                </div>
            </div>
        `;

        setTimeout(() => {
            renderMonthlyChart(data);
            renderTypeChart(data);
            renderBudgetChart(data);
            renderRatioChart(data);
        }, 100);
    }

    function renderMonthlyChart(data) {
        const ctx = document.getElementById('monthlyChart');
        if (!ctx) return;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const counts = new Array(12).fill(0);
        data.trainings.forEach(t => {
            const month = new Date(t.date).getMonth();
            counts[month]++;
        });

        const isNight = document.body.classList.contains('theme-night');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Trainings',
                    data: counts,
                    backgroundColor: isNight ? 'rgba(212, 175, 55, 0.7)' : 'rgba(255, 169, 77, 0.75)',
                    borderColor: isNight ? '#F5D77B' : '#F0883E',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1, color: isNight ? '#9FB3C8' : '#2D4A6F' }, grid: { color: isNight ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' } }, x: { ticks: { color: isNight ? '#9FB3C8' : '#2D4A6F' }, grid: { display: false } } },
                plugins: { legend: { display: false } }
            }
        });
    }

    function renderTypeChart(data) {
        const ctx = document.getElementById('typeChart');
        if (!ctx) return;
        const internal = data.trainings.filter(t => t.type === 'Internal').length;
        const external = data.trainings.filter(t => t.type === 'External').length;
        const isNight = document.body.classList.contains('theme-night');

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Internal', 'External'],
                datasets: [{
                    data: [internal, external],
                    backgroundColor: isNight ? ['#D4AF37', '#F5D77B'] : ['#FFA94D', '#FFD8A8'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { padding: 16, color: isNight ? '#9FB3C8' : '#2D4A6F' } } }
            }
        });
    }

    function renderBudgetChart(data) {
        const ctx = document.getElementById('budgetChart');
        if (!ctx) return;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const budgets = new Array(12).fill(0);
        data.trainings.forEach(t => {
            const month = new Date(t.date).getMonth();
            budgets[month] += parseFloat(t.budget) || 0;
        });
        const isNight = document.body.classList.contains('theme-night');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Budget ($)',
                    data: budgets,
                    borderColor: isNight ? '#D4AF37' : '#FFA94D',
                    backgroundColor: isNight ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 169, 77, 0.15)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: isNight ? '#F5D77B' : '#FFD8A8',
                    pointBorderColor: isNight ? '#D4AF37' : '#FFA94D',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, ticks: { color: isNight ? '#9FB3C8' : '#2D4A6F' }, grid: { color: isNight ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' } }, x: { ticks: { color: isNight ? '#9FB3C8' : '#2D4A6F' }, grid: { display: false } } }
            }
        });
    }

    function renderRatioChart(data) {
        const ctx = document.getElementById('ratioChart');
        if (!ctx) return;
        const internal = data.trainings.filter(t => t.type === 'Internal').length;
        const external = data.trainings.filter(t => t.type === 'External').length;
        const isNight = document.body.classList.contains('theme-night');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Internal', 'External'],
                datasets: [{
                    data: [internal, external],
                    backgroundColor: isNight ? ['#D4AF37', '#E5C158'] : ['#FFA94D', '#F0883E'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: { legend: { position: 'bottom', labels: { padding: 16, color: isNight ? '#9FB3C8' : '#2D4A6F' } } }
            }
        });
    }

    // ==================== TRAINING NEEDS ANALYSIS ====================
    function renderTNA() {
        const data = DataStore.getData();
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Needs Assessment (TNA)</h2>
                <p>Analyze training requirements by department</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">New TNA Entry</h3>
                </div>
                <form id="tnaForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Number of Staff</label>
                            <input type="number" id="tnaStaff" required min="1">
                        </div>
                        <div class="form-group">
                            <label>Department</label>
                            <select id="tnaDepartment" required>
                                <option value="">Select Department</option>
                                <option value="Academic">Academic</option>
                                <option value="Operations">Operations</option>
                                <option value="Finance">Finance</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Staff Level</label>
                            <select id="tnaLevel" required>
                                <option value="">Select Level</option>
                                <option value="Entry">Entry</option>
                                <option value="Junior">Junior</option>
                                <option value="Mid-Level">Mid-Level</option>
                                <option value="Senior">Senior</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Training Topic</label>
                            <input type="text" id="tnaTopic" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Upload File (PDF only)</label>
                        <div class="file-upload-zone" id="tnaUploadZone">
                            <p>Click or drag PDF file here</p>
                            <input type="file" id="tnaFile" accept=".pdf" hidden>
                        </div>
                        <span id="tnaFileName"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit TNA</button>
                </form>
                <div style="margin-top: 20px;">
                    <a href="https://drive.google.com/drive/folders/1bOs7I9S7nr0EcvZPqL1_3dt34pYYo9W-?usp=sharing" 
                       target="_blank" class="drive-link">
                        Open Google Drive Folder
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">TNA Records</h3>
                    <div class="search-filter">
                        <input type="text" id="tnaSearch" placeholder="Search TNA...">
                    </div>
                </div>
                <div class="table-container">
                    <table id="tnaTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Staff Count</th>
                                <th>Department</th>
                                <th>Level</th>
                                <th>Topic</th>
                                <th>File</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.tna.map(t => `
                                <tr>
                                    <td>${t.id}</td>
                                    <td>${t.staffCount}</td>
                                    <td>${t.department}</td>
                                    <td>${t.level}</td>
                                    <td>${t.topic}</td>
                                    <td>${t.fileName ? '<a href="#" onclick="viewPDF(\'tna_' + t.id + '\'); return false;" style="color: var(--info);">PDF ' + t.fileName + '</a>' : 'N/A'}</td>
                                    <td>${new Date(t.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm" onclick="deleteTNA(${t.id})">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        let selectedFile = null;

        const uploadZone = document.getElementById('tnaUploadZone');
        const fileInput = document.getElementById('tnaFile');
        const fileNameSpan = document.getElementById('tnaFileName');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                selectedFile = file;
                fileNameSpan.textContent = file.name;
            } else {
                alert('Please upload PDF only!');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                selectedFile = file;
                fileNameSpan.textContent = file.name;
            }
        });

        document.getElementById('tnaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const tna = {
                staffCount: document.getElementById('tnaStaff').value,
                department: document.getElementById('tnaDepartment').value,
                level: document.getElementById('tnaLevel').value,
                topic: document.getElementById('tnaTopic').value,
                fileName: selectedFile ? selectedFile.name : null
            };
            const savedTNA = DataStore.addTNA(tna);
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    DataStore.saveFile('tna_' + savedTNA.id, {
                        name: selectedFile.name,
                        data: e.target.result
                    });
                };
                reader.readAsDataURL(selectedFile);
            }
            alert('TNA submitted successfully!');
            renderTNA();
        });

        document.getElementById('tnaSearch').addEventListener('input', function() {
            const search = this.value.toLowerCase();
            const rows = document.querySelectorAll('#tnaTable tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(search) ? '' : 'none';
            });
        });
    }

    window.deleteTNA = function(id) {
        if (confirm('Delete this TNA record?')) {
            const data = DataStore.getData();
            data.tna = data.tna.filter(t => t.id !== id);
            DataStore.saveData(data);
            DataStore.deleteFile('tna_' + id);
            renderTNA();
        }
    };

    // ==================== TRAINING REQUEST ====================
    function renderRequest() {
        const data = DataStore.getData();
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Request</h2>
                <p>Submit new training requests</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">New Training Request</h3>
                </div>
                <form id="requestForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Requester Name</label>
                            <input type="text" id="reqName" required>
                        </div>
                        <div class="form-group">
                            <label>Training Topic</label>
                            <input type="text" id="reqTopic" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Training Date</label>
                            <input type="date" id="reqDate" required>
                        </div>
                        <div class="form-group">
                            <label>Training Type</label>
                            <select id="reqType" required>
                                <option value="">Select Type</option>
                                <option value="Internal">Internal</option>
                                <option value="External">External</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Budget ($)</label>
                            <input type="number" id="reqBudget" required min="0" step="0.01">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Attach File (PDF)</label>
                        <div class="file-upload-zone" id="reqUploadZone">
                            <p>Click or drag PDF file here</p>
                            <input type="file" id="reqFile" accept=".pdf" hidden>
                        </div>
                        <span id="reqFileName"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Request</button>
                </form>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Training Requests</h3>
                    <div class="search-filter">
                        <input type="text" id="reqSearch" placeholder="Search requests...">
                        <select id="reqFilter">
                            <option value="">All Types</option>
                            <option value="Internal">Internal</option>
                            <option value="External">External</option>
                        </select>
                    </div>
                </div>
                    <div class="table-container">
                    <table id="reqTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Requester</th>
                                <th>Topic</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Budget</th>
                                <th>File</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.requests.map(r => `
                                <tr>
                                    <td>${r.id}</td>
                                    <td>${r.requesterName}</td>
                                    <td>${r.trainingTopic}</td>
                                    <td>${r.trainingDate}</td>
                                    <td><span class="badge badge-${r.trainingType.toLowerCase()}">${r.trainingType}</span></td>
                                    <td>$${parseFloat(r.budget).toLocaleString()}</td>
                                    <td>${r.fileName ? '<a href="#" onclick="viewPDF(\'req_' + r.id + '\'); return false;" style="color: var(--info);">PDF ' + r.fileName + '</a>' : 'N/A'}</td>
                                    <td>${r.status}</td>
                                    <td>
                                        <button class="btn btn-info btn-sm" onclick="viewPDF('req_${r.id}')">Preview</button>
                                        <button class="btn btn-warning btn-sm" onclick="editRequest(${r.id})">Edit</button>
                                        <button class="btn btn-danger btn-sm" onclick="deleteRequest(${r.id})">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        let selectedFile = null;

        const uploadZone = document.getElementById('reqUploadZone');
        const fileInput = document.getElementById('reqFile');
        const fileNameSpan = document.getElementById('reqFileName');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            } else {
                alert('Please upload PDF only!');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            }
        });

        document.getElementById('requestForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const request = {
                requesterName: document.getElementById('reqName').value,
                trainingTopic: document.getElementById('reqTopic').value,
                trainingDate: document.getElementById('reqDate').value,
                trainingType: document.getElementById('reqType').value,
                budget: document.getElementById('reqBudget').value,
                fileName: selectedFile ? selectedFile.name : null
            };
            const savedRequest = DataStore.addTrainingRequest(request);
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    DataStore.saveFile('rec_' + savedRequest.id, {
                        name: selectedFile.name,
                        data: e.target.result
                    });
                };
                reader.readAsDataURL(selectedFile);
            }
            alert('Training request submitted!');
            renderRequest();
        });

        document.getElementById('reqSearch').addEventListener('input', function() {
            const search = this.value.toLowerCase();
            const rows = document.querySelectorAll('#reqTable tbody tr');
            rows.forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(search) ? '' : 'none';
            });
        });

        document.getElementById('reqFilter').addEventListener('change', function() {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll('#reqTable tbody tr');
            rows.forEach(row => {
                const type = row.children[4].textContent.toLowerCase();
                row.style.display = (!filter || type.includes(filter)) ? '' : 'none';
            });
        });
    }

    window.editRequest = function(id) {
        const data = DataStore.getData();
        const request = data.requests.find(r => r.id === id);
        if (!request) {
            alert('Training request not found!');
            return;
        }

        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('pdf-viewer');
        document.getElementById('modalTitle').textContent = 'Edit Training Request #' + id;
        document.getElementById('modalBody').innerHTML = `
            <form id="editRequestForm">
                <div class="form-group">
                    <label>Requester Name</label>
                    <input type="text" id="editReqName" value="${request.requesterName}" required>
                </div>
                <div class="form-group">
                    <label>Training Topic</label>
                    <input type="text" id="editReqTopic" value="${request.trainingTopic}" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Training Date</label>
                        <input type="date" id="editReqDate" value="${request.trainingDate}" required>
                    </div>
                    <div class="form-group">
                        <label>Training Type</label>
                        <select id="editReqType" required>
                            <option value="Internal" ${request.trainingType === 'Internal' ? 'selected' : ''}>Internal</option>
                            <option value="External" ${request.trainingType === 'External' ? 'selected' : ''}>External</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Budget ($)</label>
                        <input type="number" id="editReqBudget" value="${request.budget}" required min="0" step="0.01">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <select id="editReqStatus" required>
                            <option value="pending" ${request.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="approved" ${request.status === 'approved' ? 'selected' : ''}>Approved</option>
                            <option value="rejected" ${request.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                        </select>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('modal').classList.remove('active'); document.querySelector('.modal-content').classList.remove('pdf-viewer');">Cancel</button>
                </div>
            </form>
        `;
        modal.classList.add('active');

        document.getElementById('editRequestForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const updatedFields = {
                requesterName: document.getElementById('editReqName').value,
                trainingTopic: document.getElementById('editReqTopic').value,
                trainingDate: document.getElementById('editReqDate').value,
                trainingType: document.getElementById('editReqType').value,
                budget: parseFloat(document.getElementById('editReqBudget').value),
                status: document.getElementById('editReqStatus').value
            };
            DataStore.updateTrainingRequest(id, updatedFields);
            modal.classList.remove('active');
            modalContent.classList.remove('pdf-viewer');
            alert('Training request updated successfully!');
            renderRequest();
        });
    };

    window.deleteRequest = function(id) {
        if (confirm('Delete this training request?')) {
            const data = DataStore.getData();
            data.requests = data.requests.filter(r => r.id !== id);
            data.trainings = data.trainings.filter(t => t.id !== id);
            DataStore.saveData(data);
            DataStore.deleteFile('req_' + id);
            renderRequest();
        }
    };

    // ==================== TRAINING RECORD ====================
    function renderRecord() {
        const data = DataStore.getData();
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Record</h2>
                <p>View all training records</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Upload PDF to Training Record</h3>
                </div>
                <form id="recordFileForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Select Training</label>
                            <select id="recFileTraining" required>
                                <option value="">Select a training</option>
                                ${data.trainings.map(t => `<option value="${t.id}">${t.id} - ${t.topic}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Attach File (PDF)</label>
                        <div class="file-upload-zone" id="recUploadZone">
                            <p>Click or drag PDF file here</p>
                            <input type="file" id="recFile" accept=".pdf" hidden>
                        </div>
                        <span id="recFileName"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Upload PDF</button>
                </form>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Training Records</h3>
                    <div class="search-filter">
                        <input type="text" id="recSearch" placeholder="Search records...">
                        <select id="recFilter">
                            <option value="">All Types</option>
                            <option value="Internal">Internal</option>
                            <option value="External">External</option>
                        </select>
                    </div>
                </div>
                <div class="table-container">
                    <table id="recTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Topic</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Budget</th>
                                <th>Status</th>
                                <th>File</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.trainings.map(t => `
                                <tr>
                                    <td>${t.id}</td>
                                    <td>${t.name}</td>
                                    <td>${t.topic}</td>
                                    <td>${t.date}</td>
                                    <td><span class="badge badge-${t.type.toLowerCase()}">${t.type}</span></td>
                                    <td>$${parseFloat(t.budget).toLocaleString()}</td>
                                    <td>${t.status}</td>
                                    <td>${t.fileName ? '<a href="#" onclick="viewPDF(\'rec_' + t.id + '\'); return false;" style="color: var(--info);">PDF ' + t.fileName + '</a>' : 'N/A'}</td>
                                    <td>
                                        <button class="btn btn-warning btn-sm" onclick="editTraining(${t.id})">Edit</button>
                                        <button class="btn btn-danger btn-sm" onclick="deleteTraining(${t.id})">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        let selectedFile = null;

        const uploadZone = document.getElementById('recUploadZone');
        const fileInput = document.getElementById('recFile');
        const fileNameSpan = document.getElementById('recFileName');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            } else {
                alert('Please upload PDF only!');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            }
        });

        document.getElementById('recordFileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const trainingId = document.getElementById('recFileTraining').value;
            if (!trainingId) {
                alert('Please select a training!');
                return;
            }
            if (!selectedFile) {
                alert('Please select a PDF file!');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileId = 'rec_' + trainingId;
                const fileData = {
                    name: selectedFile.name,
                    data: e.target.result
                };
                try {
                    DataStore.saveFile(fileId, fileData);
                    const data = DataStore.getData();
                    const training = data.trainings.find(t => t.id == trainingId);
                    if (training) {
                        training.fileName = selectedFile.name;
                        DataStore.saveData(data);
                    }
                    const saved = DataStore.getFile(fileId);
                    if (saved) {
                        alert('PDF uploaded successfully!');
                        renderRecord();
                    } else {
                        alert('Failed to save PDF. File may be too large for browser storage.');
                    }
                } catch (err) {
                    alert('Storage error: ' + err.message);
                }
            };
            reader.onerror = function() {
                alert('Failed to read file!');
            };
            reader.readAsDataURL(selectedFile);
        });

        document.getElementById('recSearch').addEventListener('input', function() {
            const search = this.value.toLowerCase();
            const rows = document.querySelectorAll('#recTable tbody tr');
            rows.forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(search) ? '' : 'none';
            });
        });

        document.getElementById('recFilter').addEventListener('change', function() {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll('#recTable tbody tr');
            rows.forEach(row => {
                const type = row.children[4].textContent.toLowerCase();
                row.style.display = (!filter || type.includes(filter)) ? '' : 'none';
            });
        });
    }

    window.deleteTraining = function(id) {
        if (confirm('Delete this training record?')) {
            const data = DataStore.getData();
            data.trainings = data.trainings.filter(t => t.id !== id);
            data.requests = data.requests.filter(r => r.id !== id);
            DataStore.saveData(data);
            DataStore.deleteFile('rec_' + id);
            renderRecord();
        }
    };

    window.editTraining = function(id) {
        const data = DataStore.getData();
        const training = data.trainings.find(t => t.id === id);
        if (!training) {
            alert('Training record not found!');
            return;
        }

        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('pdf-viewer');
        document.getElementById('modalTitle').textContent = 'Edit Training Record #' + id;
        document.getElementById('modalBody').innerHTML = `
            <form id="editTrainingForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="editName" value="${training.name}" required>
                </div>
                <div class="form-group">
                    <label>Topic</label>
                    <input type="text" id="editTopic" value="${training.topic}" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" id="editDate" value="${training.date}" required>
                    </div>
                    <div class="form-group">
                        <label>Type</label>
                        <select id="editType" required>
                            <option value="Internal" ${training.type === 'Internal' ? 'selected' : ''}>Internal</option>
                            <option value="External" ${training.type === 'External' ? 'selected' : ''}>External</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Budget ($)</label>
                        <input type="number" id="editBudget" value="${training.budget}" required min="0" step="0.01">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <select id="editStatus" required>
                            <option value="scheduled" ${training.status === 'scheduled' ? 'selected' : ''}>Scheduled</option>
                            <option value="completed" ${training.status === 'completed' ? 'selected' : ''}>Completed</option>
                            <option value="cancelled" ${training.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('modal').classList.remove('active'); document.querySelector('.modal-content').classList.remove('pdf-viewer');">Cancel</button>
                </div>
            </form>
        `;
        modal.classList.add('active');

        document.getElementById('editTrainingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const updatedFields = {
                name: document.getElementById('editName').value,
                topic: document.getElementById('editTopic').value,
                date: document.getElementById('editDate').value,
                type: document.getElementById('editType').value,
                budget: parseFloat(document.getElementById('editBudget').value),
                status: document.getElementById('editStatus').value
            };
            DataStore.updateTraining(id, updatedFields);
            modal.classList.remove('active');
            modalContent.classList.remove('pdf-viewer');
            alert('Training record updated successfully!');
            renderRecord();
        });
    };

    // ==================== ATTENDANCE ====================
    function renderAttendance() {
        const data = DataStore.getData();
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Attendance</h2>
                <p>Track training attendance</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">New Attendance Record</h3>
                </div>
                <form id="attendanceForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Training Topic</label>
                            <input type="text" id="attTopic" required>
                        </div>
                        <div class="form-group">
                            <label>Date</label>
                            <input type="date" id="attDate" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Total Participants</label>
                        <input type="number" id="attTotal" required min="1">
                    </div>
                    <div class="form-group">
                        <label>Upload File (PDF only)</label>
                        <div class="file-upload-zone" id="attUploadZone">
                            <p>Click or drag PDF file here</p>
                            <input type="file" id="attFile" accept=".pdf" hidden>
                        </div>
                        <span id="attFileName"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Attendance</button>
                </form>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Attendance Records</h3>
                    <div class="search-filter">
                        <input type="text" id="attSearch" placeholder="Search attendance...">
                    </div>
                </div>
                <div class="table-container">
                    <table id="attTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Training Topic</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>File</th>
                                <th>Date Added</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.attendance.map(a => `
                                <tr>
                                    <td>${a.id}</td>
                                    <td>${a.trainingTopic}</td>
                                    <td>${a.date}</td>
                                    <td>${a.totalParticipants}</td>
                                    <td>${a.fileName ? '<a href="#" onclick="viewPDF(\'att_' + a.id + '\'); return false;" style="color: var(--info);">PDF ' + a.fileName + '</a>' : 'N/A'}</td>
                                    <td>${new Date(a.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button class="btn btn-warning btn-sm" onclick="editAttendance(${a.id})">Edit</button>
                                        <button class="btn btn-danger btn-sm" onclick="deleteAttendance(${a.id})">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        let selectedFile = null;

        const uploadZone = document.getElementById('attUploadZone');
        const fileInput = document.getElementById('attFile');
        const fileNameSpan = document.getElementById('attFileName');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                selectedFile = file;
                fileNameSpan.textContent = file.name;
            } else {
                alert('Please upload PDF only!');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                selectedFile = file;
                fileNameSpan.textContent = file.name;
            }
        });

        document.getElementById('attendanceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const record = {
                trainingTopic: document.getElementById('attTopic').value,
                date: document.getElementById('attDate').value,
                totalParticipants: document.getElementById('attTotal').value,
                fileName: selectedFile ? selectedFile.name : null
            };
            const savedRecord = DataStore.addAttendance(record);
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    DataStore.saveFile('att_' + savedRecord.id, {
                        name: selectedFile.name,
                        data: e.target.result
                    });
                };
                reader.readAsDataURL(selectedFile);
            }
            alert('Attendance record added!');
            renderAttendance();
        });

        document.getElementById('attSearch').addEventListener('input', function() {
            const search = this.value.toLowerCase();
            const rows = document.querySelectorAll('#attTable tbody tr');
            rows.forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(search) ? '' : 'none';
            });
        });
    }

    window.editAttendance = function(id) {
        const data = DataStore.getData();
        const attendance = data.attendance.find(a => a.id === id);
        if (!attendance) {
            alert('Attendance record not found!');
            return;
        }

        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('pdf-viewer');
        document.getElementById('modalTitle').textContent = 'Edit Attendance Record #' + id;
        document.getElementById('modalBody').innerHTML = `
            <form id="editAttendanceForm">
                <div class="form-group">
                    <label>Training Topic</label>
                    <input type="text" id="editAttTopic" value="${attendance.trainingTopic}" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" id="editAttDate" value="${attendance.date}" required>
                    </div>
                    <div class="form-group">
                        <label>Total Participants</label>
                        <input type="number" id="editAttTotal" value="${attendance.totalParticipants}" required min="1">
                    </div>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('modal').classList.remove('active'); document.querySelector('.modal-content').classList.remove('pdf-viewer');">Cancel</button>
                </div>
            </form>
        `;
        modal.classList.add('active');

        document.getElementById('editAttendanceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const updatedFields = {
                trainingTopic: document.getElementById('editAttTopic').value,
                date: document.getElementById('editAttDate').value,
                totalParticipants: parseInt(document.getElementById('editAttTotal').value)
            };
            DataStore.updateAttendance(id, updatedFields);
            modal.classList.remove('active');
            modalContent.classList.remove('pdf-viewer');
            alert('Attendance record updated successfully!');
            renderAttendance();
        });
    };

    window.deleteAttendance = function(id) {
        if (confirm('Delete this attendance record?')) {
            const data = DataStore.getData();
            data.attendance = data.attendance.filter(a => a.id !== id);
            DataStore.saveData(data);
            DataStore.deleteFile('att_' + id);
            renderAttendance();
        }
    };

    // ==================== EVALUATION ====================
    function renderEvaluation() {
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Evaluation</h2>
                <p>View uploaded evaluation documents</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Google Drive - Evaluation Documents</h3>
                </div>
                <div style="text-align: center; padding: 40px;">
                    <p style="margin-bottom: 20px;">All evaluation documents are stored in Google Drive</p>
                    <a href="https://drive.google.com/drive/folders/1bOs7I9S7nr0EcvZPqL1_3dt34pYYo9W-?usp=sharing" 
                       target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">
                        Open Evaluation Folder
                    </a>
                </div>
                <div style="margin-top: 30px;">
                    <h4>Add Evaluation Record</h4>
                    <form id="evalForm" style="margin-top: 15px;">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Training Topic</label>
                                <input type="text" id="evalTopic" required>
                            </div>
                            <div class="form-group">
                                <label>Overall Score (%)</label>
                                <input type="number" id="evalScore" required min="0" max="100">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Upload File (PDF only)</label>
                            <div class="file-upload-zone" id="evalUploadZone">
                                <p>Click or drag PDF file here</p>
                                <input type="file" id="evalFile" accept=".pdf" hidden>
                            </div>
                            <span id="evalFileName"></span>
                        </div>
                        <div class="form-group">
                            <label>Remarks</label>
                            <textarea id="evalRemarks" rows="3" style="width: 100%; padding: 10px;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Evaluation</button>
                    </form>
                </div>
            </div>
            <div class="card">
                <h3 class="card-title" style="margin-bottom: 20px;">Evaluation Records</h3>
                <div class="table-container">
                    <table id="evalTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Training Topic</th>
                                 <th>Score</th>
                                 <th>Remarks</th>
                                 <th>File</th>
                                 <th>Date</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody id="evalTableBody"></tbody>
                    </table>
                </div>
            </div>
        `;

        const data = DataStore.getData();
        const tbody = document.getElementById('evalTableBody');
        tbody.innerHTML = data.evaluations.map(e => `
            <tr>
                <td>${e.id}</td>
                <td>${e.topic}</td>
                <td>${e.score}%</td>
                <td>${e.remarks || 'N/A'}</td>
                <td>${e.fileName ? '<a href="#" onclick="viewPDF(\'eval_' + e.id + '\'); return false;" style="color: var(--info);">PDF ' + e.fileName + '</a>' : 'N/A'}</td>
                <td>${new Date(e.createdAt).toLocaleDateString()}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteEvaluation(${e.id})">Delete</button></td>
            </tr>
        `).join('');

        let selectedFile = null;

        const uploadZone = document.getElementById('evalUploadZone');
        const fileInput = document.getElementById('evalFile');
        const fileNameSpan = document.getElementById('evalFileName');

        if (uploadZone) {
            uploadZone.addEventListener('click', () => fileInput.click());
            uploadZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadZone.classList.add('dragover');
            });
            uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
            uploadZone.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadZone.classList.remove('dragover');
                const file = e.dataTransfer.files[0];
                if (file && file.type === 'application/pdf') {
                    selectedFile = file;
                    fileNameSpan.textContent = file.name;
                } else {
                    alert('Please upload PDF only!');
                }
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file && file.type === 'application/pdf') {
                    selectedFile = file;
                    fileNameSpan.textContent = file.name;
                }
            });
        }

        document.getElementById('evalForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const evaluation = {
                topic: document.getElementById('evalTopic').value,
                score: document.getElementById('evalScore').value,
                remarks: document.getElementById('evalRemarks').value,
                fileName: selectedFile ? selectedFile.name : null
            };
            const savedEvaluation = DataStore.addEvaluation(evaluation);
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    DataStore.saveFile('eval_' + savedEvaluation.id, {
                        name: selectedFile.name,
                        data: e.target.result
                    });
                };
                reader.readAsDataURL(selectedFile);
            }
            alert('Evaluation added!');
            renderEvaluation();
        });
    }

    window.deleteEvaluation = function(id) {
        if (confirm('Delete this evaluation?')) {
            const data = DataStore.getData();
            data.evaluations = data.evaluations.filter(e => e.id !== id);
            DataStore.saveData(data);
            renderEvaluation();
        }
    };

    // ==================== CALENDAR ====================
    function renderCalendar() {
        const data = DataStore.getData();

        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Calendar</h2>
                <p>Schedule and manage your training events</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">HR Training Schedule</h3>
                    <div class="calendar-legend">
                        <span class="legend-item"><span class="legend-dot training-internal"></span> Internal Training</span>
                        <span class="legend-item"><span class="legend-dot training-external"></span> External Training</span>
                    </div>
                </div>
                <div class="calendar-container">
                    <div id="calendar"></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Khmer Lunar Calendar</h3>
                    <a href="https://khmer-lunar-calendar.com/" target="_blank" class="btn btn-secondary btn-sm" style="text-decoration: none;">Open Full Calendar</a>
                </div>
                <div class="khmer-calendar-embed">
                    <div class="embed-loading" id="khmerCalendarLoader">
                        <div class="embed-spinner"></div>
                        <span>Loading Khmer Lunar Calendar...</span>
                    </div>
                    <iframe src="https://khmer-lunar-calendar.com/" title="Khmer Lunar Calendar" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups" onload="document.getElementById('khmerCalendarLoader').style.display='none'"></iframe>
                </div>
            </div>
        `;

        setTimeout(() => {
            const calendarEl = document.getElementById('calendar');
            if (calendarEl && typeof FullCalendar !== 'undefined') {
                const isNight = document.body.classList.contains('theme-night');
                const accentPrimary = isNight ? '#D4AF37' : '#FFA94D';
                const accentSecondary = isNight ? '#F5D77B' : '#FFD8A8';

                const trainings = data.trainings.map(t => ({
                    title: t.topic,
                    start: t.date,
                    color: t.type === 'Internal' ? accentPrimary : accentSecondary,
                    textColor: isNight ? '#0B1B2B' : '#ffffff',
                    extendedProps: { type: 'training', trainingType: t.type }
                }));

                calendarInstance = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    },
                    buttonText: {
                        today: 'Today',
                        month: 'Month',
                        week: 'Week'
                    },
                    events: trainings,
                    dayCellDidMount: function(info) {
                        const day = info.date.getDay();
                        if (day === 0 || day === 6) {
                            info.el.style.backgroundColor = isNight ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 169, 77, 0.06)';
                        }
                    },
                    eventClick: function(info) {
                        info.jsEvent.preventDefault();
                        const trainingType = info.event.extendedProps.trainingType || 'Internal';

                        const modalBody = document.getElementById('modalBody');
                        const modalTitle = document.getElementById('modalTitle');
                        const modalContent = modal.querySelector('.modal-content');
                        modalContent.classList.remove('pdf-viewer');
                        modalTitle.textContent = info.event.title;
                        modalBody.innerHTML = `
                            <div style="padding: 10px 0;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                                    <span class="badge badge-${trainingType === 'External' ? 'external' : 'internal'}">${trainingType} Training</span>
                                </div>
                                <p style="color: var(--text-secondary); margin-bottom: 8px;">
                                    <strong style="color: var(--text-primary);">Date:</strong> ${info.event.start.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        `;
                        modal.classList.add('active');
                    },
                    height: 'auto',
                    dayMaxEvents: 3
                });
                calendarInstance.render();
            }
        }, 100);
    }

    // ==================== EXPENDITURE ====================
    function renderExpenditure() {
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Expenditure</h2>
                <p>Financial tracking via Google Sheets</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Budget Expenditure Sheet</h3>
                    <a href="https://docs.google.com/spreadsheets/d/1NvNpSxW883TEKRo61vR3Qsx3nuqgp6fxlcg3PH31Yoc/edit" 
                       target="_blank" class="btn btn-primary">Open in Google Sheets</a>
                </div>
                <div style="margin-top: 20px;">
                    <iframe src="https://docs.google.com/spreadsheets/d/1NvNpSxW883TEKRo61vR3Qsx3nuqgp6fxlcg3PH31Yoc/edit?usp=sharing&embedded=true" 
                            width="100%" height="500" frameborder="0" style="border-radius: 8px;"></iframe>
                </div>
            </div>
        `;
    }

    // ==================== POST TRAINING REPORT ====================
    function renderReport() {
        const data = DataStore.getData();
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Post Training Report</h2>
                <p>Submit training completion reports</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">New Report</h3>
                </div>
                <form id="reportForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Training Topic</label>
                            <input type="text" id="repTopic" required>
                        </div>
                        <div class="form-group">
                            <label>Number of Participants</label>
                            <input type="number" id="repParticipants" required min="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Overall Score (%)</label>
                        <input type="number" id="repScore" required min="0" max="100">
                    </div>
                    <div class="form-group">
                        <label>Attach PDF Report</label>
                        <div class="file-upload-zone" id="repUploadZone">
                            <p>Click or drag PDF file here</p>
                            <input type="file" id="repFile" accept=".pdf" hidden>
                        </div>
                        <span id="repFileName"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Report</button>
                </form>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Reports</h3>
                </div>
                <div class="table-container">
                    <table id="repTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Topic</th>
                                <th>Participants</th>
                                <th>Score</th>
                                <th>File</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.reports.map(r => `
                                <tr>
                                    <td>${r.id}</td>
                                    <td>${r.topic}</td>
                                    <td>${r.participants}</td>
                                    <td>${r.score}%</td>
                                    <td>${r.fileName ? '<a href="#" onclick="viewPDF(\'rep_' + r.id + '\'); return false;" style="color: var(--info);">PDF ' + r.fileName + '</a>' : 'N/A'}</td>
                                    <td>${new Date(r.createdAt).toLocaleDateString()}</td>
                                    <td><button class="btn btn-danger btn-sm" onclick="deleteReport(${r.id})">Delete</button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        let selectedFile = null;

        const uploadZone = document.getElementById('repUploadZone');
        const fileInput = document.getElementById('repFile');
        const fileNameSpan = document.getElementById('repFileName');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            } else {
                alert('Please upload PDF only!');
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File too large! Maximum size is 5MB.');
                    return;
                }
                selectedFile = file;
                fileNameSpan.textContent = file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
            }
        });

        document.getElementById('reportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const report = {
                topic: document.getElementById('repTopic').value,
                participants: document.getElementById('repParticipants').value,
                score: document.getElementById('repScore').value,
                fileName: selectedFile ? selectedFile.name : null
            };
            const savedReport = DataStore.addReport(report);
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    DataStore.saveFile('rep_' + savedReport.id, {
                        name: selectedFile.name,
                        data: e.target.result
                    });
                };
                reader.readAsDataURL(selectedFile);
            }
            alert('Report submitted!');
            renderReport();
        });
    }

    window.deleteReport = function(id) {
        if (confirm('Delete this report?')) {
            const data = DataStore.getData();
            data.reports = data.reports.filter(r => r.id !== id);
            DataStore.saveData(data);
            DataStore.deleteFile('rep_' + id);
            renderReport();
        }
    };

    window.viewPDF = function(fileId) {
        const fileData = DataStore.getFile(fileId);
        if (!fileData) {
            alert('File not found! The PDF may not be uploaded or may have been cleared from storage.');
            return;
        }
        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.add('pdf-viewer');
        document.getElementById('modalTitle').textContent = 'PDF Viewer - ' + fileData.name;
        document.getElementById('modalBody').innerHTML = `
            <iframe src="${fileData.data}" width="100%" height="600px" style="border: none;"></iframe>
            <div style="margin-top: 15px; text-align: center;">
                <a href="${fileData.data}" download="${fileData.name}" class="btn btn-primary">Download PDF</a>
            </div>
        `;
        modal.classList.add('active');
    };

    // ==================== MASTER LIST ====================
    function renderMasterList() {
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Training Master List</h2>
                <p>Complete training database via Google Sheets</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Master Training List</h3>
                    <a href="https://docs.google.com/spreadsheets/d/1aqPtEx6EpOvv18kewVpgCJSHoHvW5P47veXXzHGoPfM/edit" 
                       target="_blank" class="btn btn-primary">Open in Google Sheets</a>
                </div>
                <div style="margin-top: 20px;">
                    <iframe src="https://docs.google.com/spreadsheets/d/1aqPtEx6EpOvv18kewVpgCJSHoHvW5P47veXXzHGoPfM/edit?usp=sharing&embedded=true" 
                            width="100%" height="500" frameborder="0" style="border-radius: 8px;"></iframe>
                </div>
            </div>
        `;
    }

    // ==================== BACKUP SYSTEM ====================
    function renderBackup() {
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>Backup System</h2>
                <p>Import/Export system data</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Import Data</h3>
                </div>
                <div class="import-file-browser">
                    <div class="import-drop-zone" id="importDropZone">
                        <div class="import-icon-wrapper">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                                <polyline points="17,8 12,3 7,8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                        </div>
                        <h4>Drop files here or click to browse</h4>
                        <p>Supported formats: JSON (.json), Excel (.xlsx, .xls)</p>
                        <input type="file" id="importFileInput" accept=".json,.xlsx,.xls" hidden>
                    </div>
                    <div class="import-file-info" id="importFileInfo" style="display: none;">
                        <div class="import-file-preview">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                            </svg>
                            <div class="import-file-details">
                                <span class="import-file-name" id="importFileName"></span>
                                <span class="import-file-size" id="importFileSize"></span>
                            </div>
                        </div>
                        <div class="import-actions">
                            <button class="btn btn-primary" id="confirmImportBtn">Import Data</button>
                            <button class="btn btn-secondary" id="cancelImportBtn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Export Data</h3>
                </div>
                <div class="export-options">
                    <div class="export-card" onclick="exportJSON()">
                        <div class="export-icon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <path d="M9 15h6"/>
                            </svg>
                        </div>
                        <h4>Export as JSON</h4>
                        <p>Full backup with all data and files</p>
                        <span class="export-badge">Recommended</span>
                    </div>
                    <div class="export-card" onclick="exportExcel()">
                        <div class="export-icon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <line x1="3" y1="9" x2="21" y2="9"/>
                                <line x1="3" y1="15" x2="21" y2="15"/>
                                <line x1="9" y1="3" x2="9" y2="21"/>
                            </svg>
                        </div>
                        <h4>Export as Excel</h4>
                        <p>Spreadsheet format for analysis</p>
                    </div>
                </div>
            </div>
        `;

        const dropZone = document.getElementById('importDropZone');
        const fileInput = document.getElementById('importFileInput');
        const fileInfo = document.getElementById('importFileInfo');
        const fileName = document.getElementById('importFileName');
        const fileSize = document.getElementById('importFileSize');
        const confirmBtn = document.getElementById('confirmImportBtn');
        const cancelBtn = document.getElementById('cancelImportBtn');

        let selectedFile = null;

        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) handleFileSelect(file);
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) handleFileSelect(file);
        });

        function handleFileSelect(file) {
            const validTypes = ['application/json', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
            const validExtensions = ['.json', '.xlsx', '.xls'];
            const ext = '.' + file.name.split('.').pop().toLowerCase();

            if (!validExtensions.includes(ext)) {
                alert('Please select a JSON or Excel file (.json, .xlsx, .xls)');
                return;
            }

            selectedFile = file;
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            dropZone.style.display = 'none';
            fileInfo.style.display = 'block';
        }

        function formatFileSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
            return (bytes / 1048576).toFixed(1) + ' MB';
        }

        cancelBtn.addEventListener('click', () => {
            selectedFile = null;
            fileInput.value = '';
            dropZone.style.display = 'block';
            fileInfo.style.display = 'none';
        });

        confirmBtn.addEventListener('click', () => {
            if (!selectedFile) return;
            const ext = '.' + selectedFile.name.split('.').pop().toLowerCase();

            if (ext === '.json') {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const backup = JSON.parse(e.target.result);
                        if (backup.system === 'TDMS' && backup.data) {
                            DataStore.saveData(backup.data);
                            if (backup.pdfFiles) {
                                localStorage.setItem('tdms_files', JSON.stringify(backup.pdfFiles));
                            }
                            alert('Import successful!\nTrainings: ' + (backup.metadata?.totalTrainings || 0) + '\nPDFs restored: ' + (backup.metadata?.totalPDFFiles || 0));
                        } else {
                            DataStore.saveData(backup);
                            alert('JSON import successful!');
                        }
                        renderBackup();
                    } catch (err) {
                        alert('Invalid JSON file: ' + err.message);
                    }
                };
                reader.readAsText(selectedFile);
            } else {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: 'array' });
                        const firstSheet = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[firstSheet];
                        const jsonData = XLSX.utils.sheet_to_json(worksheet);
                        if (jsonData.length > 0) {
                            const storeData = DataStore.getData();
                            storeData.trainings = [...storeData.trainings, ...jsonData];
                            DataStore.saveData(storeData);
                            alert('Excel import completed!\nImported ' + jsonData.length + ' records from: ' + firstSheet);
                        }
                        renderBackup();
                    } catch (err) {
                        alert('Failed to import Excel: ' + err.message);
                    }
                };
                reader.readAsArrayBuffer(selectedFile);
            }
        });
    }

    window.exportExcel = function() {
        const data = DataStore.getData();
        const ws = XLSX.utils.json_to_sheet(data.trainings);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Trainings');
        
        const ws2 = XLSX.utils.json_to_sheet(data.requests);
        XLSX.utils.book_append_sheet(wb, ws2, 'Requests');
        
        XLSX.writeFile(wb, 'TDMS_Backup.xlsx');
    };

    window.exportJSON = function() {
        const data = DataStore.getData();
        const files = JSON.parse(localStorage.getItem('tdms_files')) || {};
        const backupPayload = {
            system: 'TDMS',
            version: '2.0',
            exportedAt: new Date().toISOString(),
            metadata: {
                totalTrainings: data.trainings.length,
                totalRequests: data.requests.length,
                totalAttendance: data.attendance.length,
                totalEvaluations: data.evaluations.length,
                totalReports: data.reports.length,
                totalTNA: data.tna.length,
                totalPDFFiles: Object.keys(files).length,
                pdfStorageSize: JSON.stringify(files).length
            },
            data: {
                trainings: data.trainings,
                requests: data.requests,
                attendance: data.attendance,
                evaluations: data.evaluations,
                reports: data.reports,
                tna: data.tna,
                nextId: data.nextId
            },
            pdfFiles: files
        };
        const json = JSON.stringify(backupPayload, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        a.download = `TDMS_Backup_${timestamp}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    // ==================== SYSTEM RESET ====================
    function renderReset() {
        mainContent.innerHTML = `
            <div class="page-header">
                <h2>System Reset</h2>
                <p>Reset all system data</p>
            </div>
            <div class="card">
                <div class="confirm-dialog">
                    <h3>Warning: System Reset</h3>
                    <p>This will permanently delete ALL data including:</p>
                    <ul style="text-align: left; display: inline-block; margin: 20px 0;">
                        <li>Training Records</li>
                        <li>Training Requests</li>
                        <li>TNA Records</li>
                        <li>Attendance Records</li>
                        <li>Evaluation Records</li>
                        <li>Reports</li>
                    </ul>
                    <p><strong>This action cannot be undone!</strong></p>
                    <div class="confirm-actions">
                        <button class="btn btn-danger" onclick="confirmReset()">Yes, Reset All Data</button>
                        <button class="btn btn-primary" onclick="loadModule('dashboard')">Cancel</button>
                    </div>
                </div>
            </div>
        `;
    }

    window.confirmReset = function() {
        if (confirm('Are you sure you want to reset all data?')) {
            DataStore.resetData();
            alert('System reset complete! All data has been cleared.');
            renderReset();
        }
    };

    // ==================== INITIAL LOAD ====================
    renderDashboard();
}
