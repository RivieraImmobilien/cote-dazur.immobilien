document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('address');
  const display = document.getElementById('addressDisplay');
  const mapEl = document.getElementById('map');

  // Karte initialisieren
  const map = new google.maps.Map(mapEl, {
    center: { lat: 50.1109, lng: 8.6821 }, // z.B. Frankfurt a.M.
    zoom: 6
  });
  const marker = new google.maps.Marker({ map });

  // Autocomplete für DE & CH
  const autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: ['de', 'ch'] },
    types: ['address']
  });
  autocomplete.bindTo('bounds', map);

  // Wenn Nutzer tippt, Overlay updaten
  input.addEventListener('input', () => {
    display.textContent = input.value;
  });

  // Wenn Ort gewählt wird, Karte & Overlay updaten
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) return;

    // Karte neu zentrieren
    map.setCenter(place.geometry.location);
    map.setZoom(15);
    marker.setPosition(place.geometry.location);

    // Vollständige Adresse anzeigen
    display.textContent = place.formatted_address;
  });
});
