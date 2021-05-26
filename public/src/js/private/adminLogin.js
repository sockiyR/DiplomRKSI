console.log($(".login-form"));
document.querySelectorAll(".login-form").forEach(form =>{
    form.addEventListener('submit', event=>{
        event.preventDefault();
        
        const admin = {
            login:form.login.value,
            password:form.password.value
        };
        
        fetch("/adminPanel/login/autorez", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(admin)
        }).then(res => {
            if (res.status == 200) {
                document.location.href = '/adminPanel/bathroom';
            } else {
                alert("Неверные данные для входа");
            }
        });
    })
});