const products = [
    // Catégorie : Chemises
    { 
        id: 1, 
        name: 'Chemise en Jean', 
        price: 29.99, 
        stock: true, 
        image: '/images/chemisejean.jpg', 
        gallery: ['https://i.pinimg.com/736x/0d/a3/26/0da326985db05b7252e18a4b8f9d14d9.jpg', 'https://i.pinimg.com/736x/6b/27/2d/6b272db4ecaa73585048e719760006c7.jpg', 'https://i.pinimg.com/736x/ec/0f/08/ec0f080b727a73fbaf8dd1ab08cb04c4.jpg'], // Ajout de la galerie
        sizes: ['S', 'M', 'L', 'XL'], 
        colors: ['Bleu', 'Noir'], 
        description: 'Chemise en jean classique avec des poches.', 
        category: 'Chemises' 
    },
    { 
        id: 2, 
        name: 'Chemise à Carreaux', 
        price: 24.99, 
        stock: true, 
        image: './cj.jpg', 
        gallery: ['url_to_gallery_image2_1', 'url_to_gallery_image2_2'], // Ajout de la galerie
        sizes: ['M', 'L'], 
        colors: ['Rouge', 'Vert'], 
        description: 'Chemise à carreaux en flanelle confortable.', 
        category: 'Chemises' 
    },
    { 
        id: 3, 
        name: 'Chemise en Lin', 
        price: 34.99, 
        stock: true, 
        image: 'url_to_image3', 
        gallery: ['url_to_gallery_image3_1', 'url_to_gallery_image3_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L'], 
        colors: ['Blanc', 'Beige'], 
        description: 'Chemise légère en lin, parfaite pour l’été.', 
        category: 'Chemises' 
    },
    { 
        id: 4, 
        name: 'Chemise de Costume', 
        price: 49.99, 
        stock: true, 
        image: 'url_to_image4', 
        gallery: ['url_to_gallery_image4_1', 'url_to_gallery_image4_2'], // Ajout de la galerie
        sizes: ['M', 'L', 'XL'], 
        colors: ['Blanc', 'Bleu'], 
        description: 'Chemise élégante pour les occasions spéciales.', 
        category: 'Chemises' 
    },

    // Catégorie : Pantalons
    { 
        id: 5, 
        name: 'Jean Droit', 
        price: 39.99, 
        stock: true, 
        image: 'url_to_image5', 
        gallery: ['url_to_gallery_image5_1', 'url_to_gallery_image5_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L'], 
        colors: ['Indigo', 'Noir'], 
        description: 'Jean droit en denim classique.', 
        category: 'Pantalons' 
    },
    { 
        id: 6, 
        name: 'Pantalon Chino', 
        price: 35.99, 
        stock: true, 
        image: 'url_to_image6', 
        gallery: ['url_to_gallery_image6_1', 'url_to_gallery_image6_2'], // Ajout de la galerie
        sizes: ['M', 'L', 'XL'], 
        colors: ['Beige', 'Marine'], 
        description: 'Pantalon chino élégant, parfait pour le bureau.', 
        category: 'Pantalons' 
    },
    { 
        id: 7, 
        name: 'Jogging', 
        price: 29.99, 
        stock: true, 
        image: 'url_to_image7', 
        gallery: ['url_to_gallery_image7_1', 'url_to_gallery_image7_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L', 'XL'], 
        colors: ['Gris', 'Noir'], 
        description: 'Pantalon de jogging confortable pour les activités décontractées.', 
        category: 'Pantalons' 
    },

    // Catégorie : Chaussures
    { 
        id: 8, 
        name: 'Baskets Sportives', 
        price: 59.99, 
        stock: true, 
        image: 'url_to_image8', 
        gallery: ['url_to_gallery_image8_1', 'url_to_gallery_image8_2'], // Ajout de la galerie
        sizes: ['38', '39', '40', '41'], 
        colors: ['Blanc', 'Noir'], 
        description: 'Baskets légères pour le sport.', 
        category: 'Chaussures' 
    },
    { 
        id: 9, 
        name: 'Bottes en Cuir', 
        price: 89.99, 
        stock: false, 
        image: 'url_to_image9', 
        gallery: ['url_to_gallery_image9_1', 'url_to_gallery_image9_2'], // Ajout de la galerie
        sizes: ['39', '40', '41'], 
        colors: ['Marron', 'Noir'], 
        description: 'Bottes en cuir élégantes pour l’hiver.', 
        category: 'Chaussures' 
    },
    { 
        id: 10, 
        name: 'Sandales d’Été', 
        price: 34.99, 
        stock: true, 
        image: 'url_to_image10', 
        gallery: ['url_to_gallery_image10_1', 'url_to_gallery_image10_2'], // Ajout de la galerie
        sizes: ['37', '38', '39'], 
        colors: ['Jaune', 'Rouge'], 
        description: 'Sandales confortables pour l’été.', 
        category: 'Chaussures' 
    },

    // Catégorie : Accessoires
    { 
        id: 11, 
        name: 'Ceinture en Cuir', 
        price: 19.99, 
        stock: true, 
        image: 'url_to_image11', 
        gallery: ['url_to_gallery_image11_1', 'url_to_gallery_image11_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L'], 
        colors: ['Noir', 'Marron'], 
        description: 'Ceinture en cuir véritable.', 
        category: 'Accessoires' 
    },
    { 
        id: 12, 
        name: 'Chapeau de Paille', 
        price: 24.99, 
        stock: true, 
        image: 'url_to_image12', 
        gallery: ['url_to_gallery_image12_1', 'url_to_gallery_image12_2'], // Ajout de la galerie
        sizes: ['Unique'], 
        colors: ['Naturel'], 
        description: 'Chapeau idéal pour les journées ensoleillées.', 
        category: 'Accessoires' 
    },
    { 
        id: 13, 
        name: 'Montre Élégante', 
        price: 149.99, 
        stock: true, 
        image: 'url_to_image13', 
        gallery: ['url_to_gallery_image13_1', 'url_to_gallery_image13_2'], // Ajout de la galerie
        sizes: ['Unique'], 
        colors: ['Argent', 'Or'], 
        description: 'Montre élégante pour toutes les occasions.', 
        category: 'Accessoires' 
    },

    // Catégorie : Vêtements de Sport
    { 
        id: 14, 
        name: 'T-shirt de Sport', 
        price: 24.99, 
        stock: true, 
        image: 'url_to_image14', 
        gallery: ['url_to_gallery_image14_1', 'url_to_gallery_image14_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L', 'XL'], 
        colors: ['Bleu', 'Rouge'], 
        description: 'T-shirt respirant pour les activités sportives.', 
        category: 'Vêtements de Sport' 
    },
    { 
        id: 15, 
        name: 'Short de Sport', 
        price: 19.99, 
        stock: true, 
        image: 'url_to_image15', 
        gallery: ['url_to_gallery_image15_1', 'url_to_gallery_image15_2'], // Ajout de la galerie
        sizes: ['S', 'M', 'L'], 
        colors: ['Noir', 'Gris'], 
        description: 'Short léger et confortable pour l’entraînement.', 
        category: 'Vêtements de Sport' 
    },
    { 
               // Catégorie : Vêtements de Sport
               id: 16, 
               name: 'Leggings de Yoga', 
               price: 29.99, 
               stock: true, 
               image: 'url_to_image16', 
               gallery: ['url_to_gallery_image16_1', 'url_to_gallery_image16_2', 'url_to_gallery_image16_3'], // Ajout de la galerie
               sizes: ['M', 'L'], 
               colors: ['Violet', 'Noir'], 
               description: 'Leggings élastiques pour le yoga et le fitness.', 
               category: 'Vêtements de Sport' 
           },
       
           // Catégorie : Manteaux
           { 
               id: 17, 
               name: 'Manteau d’Hiver', 
               price: 99.99, 
               stock: true, 
               image: 'url_to_image17', 
               gallery: ['url_to_gallery_image17_1', 'url_to_gallery_image17_2', 'url_to_gallery_image17_3'], // Ajout de la galerie
               sizes: ['M', 'L', 'XL'], 
               colors: ['Noir', 'Bleu'], 
               description: 'Manteau chaud pour l’hiver.', 
               category: 'Manteaux' 
           },
           { 
               id: 18, 
               name: 'Veste en Cuir', 
               price: 149.99, 
               stock: true, 
               image: 'url_to_image18', 
               gallery: ['url_to_gallery_image18_1', 'url_to_gallery_image18_2'], // Ajout de la galerie
               sizes: ['S', 'M', 'L'], 
               colors: ['Marron', 'Noir'], 
               description: 'Veste en cuir intemporelle.', 
               category: 'Manteaux' 
           },
           { 
               id: 19, 
               name: 'Parka Imperméable', 
               price: 79.99, 
               stock: false, 
               image: 'url_to_image19', 
               gallery: ['url_to_gallery_image19_1', 'url_to_gallery_image19_2'], // Ajout de la galerie
               sizes: ['M', 'L'], 
               colors: ['Vert', 'Gris'], 
               description: 'Parka résistante à l’eau pour les jours pluvieux.', 
               category: 'Manteaux' 
           },
       
           // Catégorie : Pijamas
           { 
               id: 20, 
               name: 'Pyjama en Coton', 
               price: 39.99, 
               stock: true, 
               image: 'url_to_image20', 
               gallery: ['url_to_gallery_image20_1', 'url_to_gallery_image20_2'], // Ajout de la galerie
               sizes: ['S', 'M', 'L'], 
               colors: ['Rose', 'Bleu'], 
               description: 'Pyjama doux et confortable pour la nuit.', 
               category: 'Pijamas' 
           },
           { 
               id: 21, 
               name: 'Nuisette en Satin', 
               price: 49.99, 
               stock: true, 
               image: 'url_to_image21', 
               gallery: ['url_to_gallery_image21_1', 'url_to_gallery_image21_2'], // Ajout de la galerie
               sizes: ['M', 'L'], 
               colors: ['Rouge', 'Noir'], 
               description: 'Nuisette sexy en satin.', 
               category: 'Pijamas' 
           },
           { 
               id: 22, 
               name: 'Chaussons en Peluche', 
               price: 24.99, 
               stock: true, 
               image: 'url_to_image22', 
               gallery: ['url_to_gallery_image22_1', 'url_to_gallery_image22_2'], // Ajout de la galerie
               sizes: ['S', 'M', 'L'], 
               colors: ['Gris', 'Bleu'], 
               description: 'Chaussons douillets pour la maison.', 
               category: 'Pijamas' 
           },
       ];
       
       export default products;
       