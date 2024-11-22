<template>
  <footer class="footer">
    <!-- Section Newsletter -->
    <img src="/Logo_footer.svg" alt="logo" class="w-48 mx-auto" />
    <div class="newsletter">
      <h2>S'abonner pour 25% de réduction sur votre première commande</h2>
      <div class="subscribe-form">
        <input type="email" placeholder="Entrez votre email" />
        <button class="subscribe-btn">S'abonner</button>
      </div>
    </div>

    <!-- Section Links -->
    <div class="footer-content">
      <!-- Pages -->
      <div class="footer-section">
        <h3>Pages</h3>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/home-2">Accueil 2</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/privacy-policy">Politique de confidentialité</a></li>
        </ul>
      </div>

      <!-- Utility pages -->
      <div class="footer-section">
        <h3>Pages utilitaires</h3>
        <ul>
          <li><a href="/style-guide">Guide de style</a></li>
          <li><a href="/instructions">Instructions</a></li>
          <li><a href="/licenses">Licences</a></li>
          <li><a href="/changelog">Changelog</a></li>
          <li><a href="/404">Erreur 404</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h3>Contact</h3>
        <p>example@gmail.com</p>
        <div class="social-links">
          <a href="#" class="social-link">FB</a>
          <a href="#" class="social-link">IN</a>
          <a href="#" class="social-link">YT</a>
        </div>
      </div>
    </div>
    <div class="divider w-[75%] h-[1px] bg-black mx-auto mt-8"></div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem;
  background-color: #e6ffe6;
}

.newsletter {
  text-align: center;
  margin-bottom: 4rem;
}

.newsletter h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
}

.subscribe-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.subscribe-form input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #000;
  border-radius: 4px;
}

.subscribe-btn {
  padding: 0.75rem 2rem;
  background-color: #b19cd9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #000;
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .subscribe-form {
    flex-direction: column;
    padding: 0 1rem;
  }
}
.social-links .social-link {
   background-image: url('/discount.svg');
   width: 100px;
   height: 100px;
   background-size: cover;
   background-repeat: no-repeat;
}
</style>
