export const mockPaintings = [
    {
        id: "1",
        title: "Sunset Over the Valley",
        artist: "Claude Monet",
        year: 1889,
        imageUrl: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
        highestBid: 125000,
        bidCount: 23,
        medium: "Oil on canvas",
        dimensions: "73.7 cm × 92.1 cm",
        condition: "Excellent",
        artistBio: "Claude Monet was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement's philosophy."
    },
    {
        id: "2",
        title: "Portrait of a Lady",
        artist: "Johannes Vermeer",
        year: 1665,
        imageUrl: "https://images.unsplash.com/photo-1583119912267-cc97c911e416?w=800&q=80",
        highestBid: 450000,
        bidCount: 45,
        medium: "Oil on canvas",
        dimensions: "44.5 cm × 39 cm",
        condition: "Very Good",
        artistBio: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle class life."
    },
    {
        id: "3",
        title: "The Storm",
        artist: "J.M.W. Turner",
        year: 1842,
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
        highestBid: 280000,
        bidCount: 31,
        medium: "Watercolor on paper",
        dimensions: "30.5 cm × 48.7 cm",
        condition: "Good",
        artistBio: "Joseph Mallord William Turner was an English Romantic painter, printmaker and watercolourist, known for his expressive colourisation."
    },
    {
        id: "4",
        title: "Abstract Composition",
        artist: "Wassily Kandinsky",
        year: 1923,
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
        highestBid: 320000,
        bidCount: 28,
        medium: "Oil and tempera on canvas",
        dimensions: "140 cm × 201 cm",
        condition: "Excellent",
        artistBio: "Wassily Kandinsky was a Russian painter and art theorist, generally credited as the pioneer of abstract art."
    },
    {
        id: "5",
        title: "Garden at Giverny",
        artist: "Claude Monet",
        year: 1900,
        imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80",
        highestBid: 180000,
        bidCount: 19,
        medium: "Oil on canvas",
        dimensions: "81 cm × 92 cm",
        condition: "Very Good",
        artistBio: "Claude Monet's garden at Giverny is the inspiration for many of his most famous paintings, particularly his water lily series."
    },
    {
        id: "6",
        title: "Still Life with Flowers",
        artist: "Paul Cézanne",
        year: 1895,
        imageUrl: "https://images.unsplash.com/photo-1606562758304-0eaaa45acdac?w=800&q=80",
        highestBid: 220000,
        bidCount: 26,
        medium: "Oil on canvas",
        dimensions: "65 cm × 81 cm",
        condition: "Good",
        artistBio: "Paul Cézanne was a French artist and Post-Impressionist painter whose work laid the foundations of modern art."
    }
];

export const formatCurrency = (amount, locale = "da-DK", currency = "DKK") => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
};
