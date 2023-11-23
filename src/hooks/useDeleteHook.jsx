import { getStorage, ref, deleteObject } from "@firebase/storage";

export const useDeleteHook = () => {
  const storage = getStorage(); // Crea una instancia de storage

  const deleteImage = async (imageNumber) => {
    const imageRef = ref(storage, 'files/' + imageNumber);
    try {
      await deleteObject(imageRef);
      console.log(`Image number ${imageNumber} has been deleted successfully.`);
    } catch (error) {
      console.error(`Failed to remove image number ${imageNumber}.`, error);
    }
  };

  return { deleteImage };
};