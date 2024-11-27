export const fileUpload = async (file) => {
    if(!file) throw new Error('No file selected');

    const cloudUrl = "https://api.cloudinary.com/v1_1/dilektp3a/image/upload";
    
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(!response.ok) throw new Error('Failed to upload image');

        const cloudResponse = await response.json();

        return cloudResponse.secure_url;
    } catch (error) {
        throw error;
    }
};
