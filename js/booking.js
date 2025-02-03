document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventDate: document.getElementById('event-date').value,
            eventType: document.getElementById('event-type').value,
            message: document.getElementById('message').value
        };

        // Basic form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.eventType) {
            alert('Please fill in all required fields');
            return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Booking request submitted successfully! We will contact you soon.');
        bookingForm.reset();
    });

    // Prevent selecting past dates
    const eventDateInput = document.getElementById('event-date');
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
}); 