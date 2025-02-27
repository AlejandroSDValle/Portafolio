import styles from "./css/Contact.module.css"

function Contact() {

  const handleOpenPDF = () => {
      window.open('/Alejandro Santillan - CV.pdf', '_blank');
  };


  return (
    <div className={styles.contact}>
        <h2>Contactame</h2>
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/alejandro-santillan-32a089218" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/AlejandroSDValle" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <a onClick={handleOpenPDF} className={styles.downloadCv} >Open CV</a>
    </div>
  )
}

export default Contact