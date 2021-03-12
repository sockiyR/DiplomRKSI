document.querySelectorAll(".button-form").forEach(form => {
    const id = form.updateEntity.dataset.idEntity;
    const name = form.updateEntity.dataset.name;
    const urlUpdate = form.updateEntity.dataset.urlEntity;
    const urlDelete = form.deleteEntity.dataset.urlEntity;
    form.updateEntity.addEventListener('click', () => {
        fetch(urlUpdate + id, {
                method: 'GET'
            })
            .then(() => {
                document.location.href = urlUpdate + id;
            });
    });

    form.deleteEntity.addEventListener('click', () => {
        if (confirm(`Вы уверены что хотите удалить эллемент с name = ${name}?`)) {
            fetch(urlDelete+id, {
                method: 'DELETE'
            }).then(result => {
                console.log()
                if (result.status == 200) {
                    document.location.reload();
                } else {
                    alert('Кавальски всё пощло не по плану');
                }
            });
        } 
    });
})
