// $(function () {
//     const libfonts = [
//         { "font-name": "D-DIN", "style": "Sans-serif", "class": "d-din", "download_link": "lib/D-DIN" },
//         { "font-name": "DIN", "style": "Sans-serif", "class": "din", "download_link": "lib/DN-Regular" },
//         { "font-name": "Figtree", "style": "Sans-serif", "class": "figtree", "download_link": "lib/Figtree" },
//         { "font-name": "Gilroy", "style": "Sans-serif", "class": "gilroy", "download_link": "lib/Gilroy" },
//         { "font-name": "Mandali", "style": "Sans-serif", "class": "mandali", "download_link": "lib/Mandali" },
//         { "font-name": "Outfit", "style": "Sans-serif", "class": "outfit", "download_link": "lib/Outfit" },
//         { "font-name": "Lexend", "style": "Sans-serif", "class": "lexend", "download_link": "lib/Lexend" },
//         { "font-name": "Lato", "style": "Sans-serif", "class": "lato", "download_link": "lib/Lato" },
//         { "font-name": "Metropolis", "style": "Sans-serif", "class": "metropolis", "download_link": "lib/Metropolis" },
//         { "font-name": "San-Francisco", "style": "Sans-serif", "class": "san-francisco", "download_link": "lib/San-Francisco" },
//         { "font-name": "Quicksand", "style": "Sans-serif", "class": "quicksand", "download_link": "lib/Quicksand" },
//         { "font-name": "Sen", "style": "Sans-serif", "class": "sen", "download_link": "lib/Sen" },
//         { "font-name": "Rubik", "style": "Sans-serif", "class": "rubik", "download_link": "lib/Rubik" },
//         { "font-name": "Ubuntu", "style": "Sans-serif", "class": "ubuntu", "download_link": "lib/Ubuntu" },
//         { "font-name": "FF-Mark", "style": "Sans-serif", "class": "ff-mark", "download_link": "lib/FF-Mark" }
//     ];

//     // Dynamically generate font cards
//     let fontsList = $('#fonts-list');
    
//     libfonts.forEach(font => {
//         fontsList.append(`
//             <div class="col-md-4 mt-2">
//                 <div class="card h-100">
//                     <div class="card-header">
//                         Font: ${font['font-name']} <sup><i class="bi bi-patch-check-fill text-primary fa-10x fs-6"></i></sup> / ${font['style']}
//                     </div>
//                     <div class="card-body ${font['class']}">
//                         <h5 class="text-primary">Normal</h5>
//                         <p>The quick brown fox jumps over the lazy dog.</p>
//                         <h5 class="text-primary">Uppercase</h5>
//                         <p class="text-uppercase">The quick brown fox jumps over the lazy dog.</p>
//                         <h5 class="text-primary">Bold</h5>
//                         <p class="fw-bold">The quick brown fox jumps over the lazy dog.</p>
//                     </div>
//                     <div class="card-footer">
//                         <button class="btn btn-sm btn-outline-primary rounded-pill download-font" data-download="${font['download_link']}" data-fontname="${font['font-name']}">
//                             <i class="bi bi-cloud-download"></i> Download
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `);
//     });

//     // Handle the download process
//     $(document).on('click', '.download-font', function () {
//         const fontFolder = $(this).data('download');
//         const fontName = $(this).data('fontname');
        
//         // List of files to zip (assuming two files for demonstration)
//         const filesToZip = [`${fontFolder}/${fontName}-Regular.ttf`,
//              `${fontFolder}/${fontName}-Black.ttf`,
//              `${fontFolder}/${fontName}-BlackItalic.ttf`,
//              `${fontFolder}/${fontName}-Italic.ttf`,
//              `${fontFolder}/${fontName}-Light.ttf`,
//              `${fontFolder}/${fontName}-Thin.ttf`,
//              `${fontFolder}/${fontName}-Regular.otf`,
//              `${fontFolder}/${fontName}-Black.otf`,
//              `${fontFolder}/${fontName}-BlackItalic.otf`,
//              `${fontFolder}/${fontName}-Italic.otf`,
//              `${fontFolder}/${fontName}-Light.otf`,
//              `${fontFolder}/${fontName}-Thin.otf`
//             ];

//         const zip = new JSZip();

//         // Create an array of promises to fetch all files
//         const filePromises = filesToZip.map(file =>
//             fetch(file)
//                 .then(response => {
//                     if (!response.ok) throw new Error(`Failed to fetch ${file}`);
//                     return response.blob();
//                 })
//                 .then(blob => {
//                     const fileName = file.split('/').pop();
//                     zip.file(fileName, blob);  // Add the file to the zip
//                 })
//         );

//         // Wait for all files to be fetched before generating the zip
//         Promise.all(filePromises)
//             .then(() => {
//                 // Generate the ZIP file after all files are added
//                 return zip.generateAsync({ type: "blob" });
//             })
//             .then(content => {
//                 // Trigger the download of the ZIP file
//                 const a = document.createElement("a");
//                 const url = URL.createObjectURL(content);
//                 a.href = url;
//                 a.download = `${fontName}.zip`;
//                 a.click();
//                 URL.revokeObjectURL(url);
//             })
//             .catch(error => console.error(`Error during zipping process: ${error}`));
//     });
// });
$(function(){


/*
@License: MIT License
@Module : Dev Collection developer-collection.js
@Author:Ouma Nyang
*/
// developer-collection.js
 class DeveloperCollection {
    constructor() {
        this.libfonts = [
            { "font-name": "D-DIN", "style": "Sans-serif", "class": "d-din", "download_link": "lib/D-DIN" },
            { "font-name": "DIN", "style": "Sans-serif", "class": "din", "download_link": "lib/DN-Regular" },
            { "font-name": "Figtree", "style": "Sans-serif", "class": "figtree", "download_link": "lib/Figtree" },
            { "font-name": "Gilroy", "style": "Sans-serif", "class": "gilroy", "download_link": "lib/Gilroy" },
            { "font-name": "Mandali", "style": "Sans-serif", "class": "mandali", "download_link": "lib/Mandali" },
            { "font-name": "Outfit", "style": "Sans-serif", "class": "outfit", "download_link": "lib/Outfit" },
            { "font-name": "Lexend", "style": "Sans-serif", "class": "lexend", "download_link": "lib/Lexend" },
            { "font-name": "Lato", "style": "Sans-serif", "class": "lato", "download_link": "lib/Lato" },
            { "font-name": "Metropolis", "style": "Sans-serif", "class": "metropolis", "download_link": "lib/Metropolis" },
            { "font-name": "San-Francisco", "style": "Sans-serif", "class": "san-francisco", "download_link": "lib/San-Francisco" },
            { "font-name": "Quicksand", "style": "Sans-serif", "class": "quicksand", "download_link": "lib/Quicksand" },
            { "font-name": "Sen", "style": "Sans-serif", "class": "sen", "download_link": "lib/Sen" },
            { "font-name": "Rubik", "style": "Sans-serif", "class": "rubik", "download_link": "lib/Rubik" },
            { "font-name": "Ubuntu", "style": "Sans-serif", "class": "ubuntu", "download_link": "lib/Ubuntu" },
            { "font-name": "FF-Mark", "style": "Sans-serif", "class": "ff-mark", "download_link": "lib/FF-Mark" }
        ];
    }

    // Function to dynamically generate font cards
    generateFontCards(containerId) {
        let fontsList = document.getElementById(containerId);
        
        this.libfonts.forEach(font => {
            fontsList.innerHTML += `
                <div class="col-md-4 mt-2">
                    <div class="card h-100">
                        <div class="card-header">
                            Font: ${font['font-name']} <sup><i class="bi bi-patch-check-fill text-primary fa-10x fs-6"></i></sup> / ${font['style']}
                        </div>
                        <div class="card-body ${font['class']}">
                            <h5 class="text-primary">Normal</h5>
                            <p>The quick brown fox jumps over the lazy dog.</p>
                            <h5 class="text-primary">Uppercase</h5>
                            <p class="text-uppercase">The quick brown fox jumps over the lazy dog.</p>
                            <h5 class="text-primary">Bold</h5>
                            <p class="fw-bold">The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-sm btn-outline-primary rounded-pill download-font" data-download="${font['download_link']}" data-fontname="${font['font-name']}">
                                <i class="bi bi-cloud-download"></i> Download
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Function to zip font files, ignoring unavailable ones
    zipFonts(fontFolder, fontName, fileList) {
        const zip = new JSZip();
        const filePromises = fileList.map(file => {
            return fetch(`${fontFolder}/${file}`)
                .then(response => {
                    if (!response.ok) throw new Error(`${file} not available`);
                    return response.blob();
                })
                .then(blob => {
                    zip.file(file, blob); // Add file to zip if available
                })
                .catch(() => {
                    console.warn(`Skipping unavailable file: ${file}`);
                });
        });

        // Wait for all promises and generate the zip
        Promise.all(filePromises)
            .then(() => zip.generateAsync({ type: "blob" }))
            .then(content => {
                const a = document.createElement("a");
                const url = URL.createObjectURL(content);
                a.href = url;
                a.download = `${fontName}.zip`;
                a.click();
                URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error generating zip:', error));
    }
 }

// Usage Example:
const devCollection = new DeveloperCollection();
devCollection.generateFontCards('fonts-list');  // Pass the container ID

// Event listener for download buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('download-font')) {
        const fontFolder = event.target.getAttribute('data-download');
        const fontName = event.target.getAttribute('data-fontname');
        
        // Example files to zip for each font
        const filesToZip = [
            `${fontName}-Regular.ttf`, 
            `${fontName}-Black.ttf`,
            `${fontName}-BlackItalic.ttf`,
            `${fontName}-Italic.ttf`
        ];

        devCollection.zipFonts(fontFolder, fontName, filesToZip);
    }
});

});