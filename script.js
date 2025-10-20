document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('.form-input');
    
    // Добавляем анимацию при фокусе на поля ввода
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = new FormData(form);
        const data = {};
        
        inputs.forEach(input => {
            data[input.placeholder] = input.value;
        });
        
        // Простая валидация
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid #ff6b6b';
                isValid = false;
            } else {
                input.style.border = 'none';
            }
        });
        
        if (isValid) {
            // Показываем сообщение об успешной регистрации
            showMessage('Регистрация прошла успешно!', 'success');
            
            // Очищаем форму
            form.reset();
        } else {
            showMessage('Пожалуйста, заполните все поля', 'error');
        }
    });
    
    // Функция для показа сообщений
    function showMessage(text, type) {
        // Удаляем предыдущее сообщение, если есть
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const message = document.createElement('div');
        message.className = `message message-${type}`;
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideDown 0.3s ease;
            ${type === 'success' ? 'background-color: #4F8C6B;' : 'background-color: #ff6b6b;'}
        `;
        
        // Добавляем CSS анимацию
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        // Удаляем сообщение через 3 секунды
        setTimeout(() => {
            message.style.animation = 'slideDown 0.3s ease reverse';
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 300);
        }, 3000);
    }
    
    // Добавляем эффект при наведении на кнопку
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    submitButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
