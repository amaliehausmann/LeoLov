import style from "./AboutMap.module.scss";

export function AboutMap() {
  return (
    <div>
      <iframe
        className={style.frameStyling}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2543149362456!2d55.450099269495645!3d-4.590925362909101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e0287dfa7c5639%3A0x4b3332c69d7bec7d!2sMaldive%20Rd%2C%20Maldive%20Village%2C%20Seychellerne!5e0!3m2!1sda!2sdk!4v1723793983723!5m2!1sda!2sdk"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
