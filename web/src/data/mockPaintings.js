export const mockPaintings = [
    {
        id: "1",
        title: "Sunset Over the Valley",
        artist: "Claude Monet",
        year: 1889,
        imageUrl: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
        currentBid: 125000,
        minimumBid: 130000,
        bidCount: 23,
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        medium: "Oil on canvas",
        dimensions: "73.7 cm × 92.1 cm",
        condition: "Excellent",
        estimate: { min: 100000, max: 150000 },
        artistBio: "Claude Monet was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement's philosophy."
    },
    {
        id: "2",
        title: "Portrait of a Lady",
        artist: "Johannes Vermeer",
        year: 1665,
        imageUrl: "https://images.unsplash.com/photo-1583119912267-cc97c911e416?w=800&q=80",
        currentBid: 450000,
        minimumBid: 460000,
        bidCount: 45,
        endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        medium: "Oil on canvas",
        dimensions: "44.5 cm × 39 cm",
        condition: "Very Good",
        estimate: { min: 400000, max: 600000 },
        artistBio: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle class life."
    },
    {
        id: "3",
        title: "The Storm",
        artist: "J.M.W. Turner",
        year: 1842,
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
        currentBid: 280000,
        minimumBid: 290000,
        bidCount: 31,
        endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
        medium: "Watercolor on paper",
        dimensions: "30.5 cm × 48.7 cm",
        condition: "Good",
        estimate: { min: 250000, max: 350000 },
        artistBio: "Joseph Mallord William Turner was an English Romantic painter, printmaker and watercolourist, known for his expressive colourisation."
    },
    {
        id: "4",
        title: "Abstract Composition",
        artist: "Wassily Kandinsky",
        year: 1923,
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
        currentBid: 320000,
        minimumBid: 330000,
        bidCount: 28,
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        medium: "Oil and tempera on canvas",
        dimensions: "140 cm × 201 cm",
        condition: "Excellent",
        estimate: { min: 300000, max: 400000 },
        artistBio: "Wassily Kandinsky was a Russian painter and art theorist, generally credited as the pioneer of abstract art."
    },
    {
        id: "5",
        title: "Garden at Giverny",
        artist: "Claude Monet",
        year: 1900,
        imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80",
        currentBid: 180000,
        minimumBid: 185000,
        bidCount: 19,
        endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
        medium: "Oil on canvas",
        dimensions: "81 cm × 92 cm",
        condition: "Very Good",
        estimate: { min: 150000, max: 250000 },
        artistBio: "Claude Monet's garden at Giverny is the inspiration for many of his most famous paintings, particularly his water lily series."
    },
    {
        id: "6",
        title: "Still Life with Flowers",
        artist: "Paul Cézanne",
        year: 1895,
        imageUrl: "https://images.unsplash.com/photo-1606562758304-0eaaa45acdac?w=800&q=80",
        currentBid: 220000,
        minimumBid: 230000,
        bidCount: 26,
        endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
        medium: "Oil on canvas",
        dimensions: "65 cm × 81 cm",
        condition: "Good",
        estimate: { min: 200000, max: 300000 },
        artistBio: "Paul Cézanne was a French artist and Post-Impressionist painter whose work laid the foundations of modern art."
    }
];

export const getTimeRemaining = (endTime) => {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) return "Ended";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) {
        return `${days}d ${hours}h`;
    }
    return `${hours}h`;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};