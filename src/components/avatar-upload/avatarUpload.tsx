import { useRef, useState, type ChangeEvent, type FC } from "react";
import styles from "./avatarUpload.module.scss";

const AvatarUpload: FC = () => {
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [prevAvatar, setPrevAvatar] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const photo = e.target.files?.[0];
    if (photo) {

      if (photo.size > 1 * 1024 * 1024){
        alert('Размер фото не может превышать 1МБ')
        return
      }

      if (!photo.type.startsWith('image/')){
        alert('Выбранный файл не является изображением')
        return
      }


      setAvatarImage(photo);
      const avatar = URL.createObjectURL(photo);
      setPrevAvatar(avatar);
    }
  };

  return (
    <div className="container">
      <div className={styles.uploadInner}>
        <div className={styles.uploadBox}>
          <div className={styles.avatarCircle}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className={styles.inputAvatar}
              id="ava-image"
            />
            {prevAvatar ? (
              <img
              src={prevAvatar}
              alt="avatarpreview"
              className={styles.avatarImage} 
              />
            ) : (
              <img className={styles.avatarStart} src="ava.png" alt="avatarStart"/>
            )}
          </div>
          <label htmlFor="ava-image">
            <button
              type="button"
              className={styles.avatarButton}
              onClick={() => fileRef.current?.click()}
            >
              Выберите фото
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
