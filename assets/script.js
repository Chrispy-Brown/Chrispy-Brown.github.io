document.addEventListener('DOMContentLoaded', function(){ 
  // year for footer (if present)
  document.querySelectorAll('.site-footer').forEach(function(f){
    // nothing to change, footer is static
  });

  // simple RSVP demo (no backend) — will prepare a downloadable .ics invitation
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = (document.getElementById('rsvp-name').value || 'Guest');
      const email = (document.getElementById('rsvp-email').value || '');
      alert('Thanks, ' + name + '! This demo RSVP does not actually send — for a real site you can hook this to Netlify Forms or a backend.');
    });
  }
});
