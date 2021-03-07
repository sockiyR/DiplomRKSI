ymaps.ready(init);

function init() {
    // Создание карты.
    // центрирование и задание зума  а так же настройка контроллеров
    var map = new ymaps.Map("map", {
        center: [47.23698407426421,39.5839845],
        zoom: 15,
        controls: ['zoomControl'],
    });
    map.behaviors.disable('scrollZoom');
    // установка маркера на карте и его катомизация
    var myPlacemark = new ymaps.Placemark(
        [47.23698407426421,39.5839845],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: './images/map_icon.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        }
    );
   
    map.geoObjects.add(myPlacemark);
}
