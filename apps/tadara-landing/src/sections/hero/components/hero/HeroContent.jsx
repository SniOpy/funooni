function HeroContent() {
  return (
    <div>
      <h1>Votre enfant utilise chaque jour un héritage de 1200 ans. <br/>Sans le savoir</h1>
      <h2>
        Derrière les objets du quotidien qu’il croit
        ordinaires.
        Il y a une histoire extraordinaire.
        Celle de la civilisation arabo-musulmane.
        Chaque mois, Tadara la lui raconte
        dans une lettre à son nom.
      </h2>

      <hr />

      <div className="form-content">
        <h2>Inscrivez-vous gratuitement pour bénéficier
          d’une offre privilégiée lors de la prochaine
          ouverture des abonnements
        </h2>
        <form>
          <input type="email" placeholder="Adresse email" />
          <button type="submit">Je veux être informé du lancement</button>
        </form>
      </div>
    </div>

    
  )
}

export default HeroContent