new Vue({
    el: '#app',
    data: {
        heading: 'Best photographer ever EU',
        currentIndex: 0,
        images: [
            'https://unsplash.it/600/400?image=666',
            'https://unsplash.it/600/400?image=249',
            'https://unsplash.it/600/400?image=456',
            'https://unsplash.it/600/400?image=386',
            'https://unsplash.it/600/400?image=287'
        ],
    },
    methods: {
        // Funzione che avanza di 1 ogni volta che si clicca sul "Pulsante".
        nextImage: function() {
            this.currentIndex++
            if ( this.currentIndex > this.images.length - 1) {
                this.currentIndex = 0;
            }
        },
        // Funzione che torna indietro di 1 ogni volta che si clicca sul "Pulsante".
        prevImage: function() {
            this.currentIndex--
            if ( this.currentIndex < 0) {
                this.currentIndex = this.images.length - 1;
            }
        },
    }
})