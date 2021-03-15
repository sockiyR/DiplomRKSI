    document.querySelectorAll('.card-body-CRUD').forEach(form => {
    var formData = new FormData();
    const type = form.formBtn.dataset.type;
    let url, id, method;
    let status;
    let code = false;

    form.addEventListener('submit', event => {
        event.preventDefault();
        let arg = $(".card-body-CRUD").serialize().split("&");
        let sendData = {};
        arg.forEach(el => {
            let coupleVar = el.split("=");
            sendData[coupleVar[0]] = coupleVar[1];
            formData.append(coupleVar[0], coupleVar[1]);
        })


        if (type == "add") {
            url = form.formBtn.dataset.url
            method = 'POST';
        }
        if (type == "update") {
            id = form.formBtn.dataset.id;
            url = form.formBtn.dataset.url + id;
            method = 'PATCH';
        }
        
        formData.append("file", document.querySelector(".upladed").files[0], "image.png");
          
        form.querySelectorAll(`input[data-namber="true"]`).forEach(input=>{
            if (code) {
                return;
            } else {
                if (!/\D/g.test(input.value)) {
                    status=true;
                } else {
                    alert("В это поле можно вводить только цифры");
                    input.value = input.value.replace(/\D/g, '');
                    code=true;
                    return;
                }
            }
           
        });
        
        if (status) {
            fetch(url, {
                method: method,
                body: formData,
            }).then(res => {
                if (res.status == 200) {
                    alert("Операция завершина успешно");
                    document.location.reload();
                } else {
                    alert("Что-то пошло не так");
                    document.location.reload();
                }
            });
        } else {
            alert("Что-то пошло не так");
            document.location.reload();
        }
    })
})
