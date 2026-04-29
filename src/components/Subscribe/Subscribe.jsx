import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * Composant Subscribe — Formulaire d'inscription newsletter Buttondown
 *
 * Props :
 *   - variant : "card" (homepage, encadré) ou "inline" (footer article, plus discret)
 *   - title : titre personnalisé (sinon valeur par défaut)
 *   - description : sous-titre optionnel
 *
 * Usage :
 *   <Subscribe variant="card" />
 *   <Subscribe variant="inline" title="Vous avez aimé cet article ?" />
 */
export default function Subscribe({
  variant = 'card',
  title = 'Rejoignez les abonnés d\'Expert To Product',
  description = null,
}) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        // Buttondown accepte le POST classique (form-urlencoded)
      });

      if (response.ok || response.status === 0 || response.type === 'opaque') {
        // Buttondown renvoie souvent une redirection, ce qui peut donner status=0 en mode no-cors
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      // En cas de mode no-cors ou erreur réseau, on assume succès
      // car Buttondown renvoie l'inscription par email
      setStatus('success');
      form.reset();
    }
  };

  const containerClass =
    variant === 'card' ? styles.card : styles.inline;

  return (
    <div className={containerClass}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}

        {status === 'success' ? (
          <div className={styles.success}>
            <strong>Merci !</strong> Vérifiez votre boîte mail pour confirmer votre inscription.
          </div>
        ) : (
          <form
            action="https://buttondown.com/api/emails/embed-subscribe/experttoproduct"
            method="post"
            className={styles.form}
            onSubmit={handleSubmit}
            target="_blank"
          >
            <label htmlFor="bd-email" className={styles.label}>
              Votre adresse email
            </label>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="vous@exemple.com"
                required
                className={styles.input}
                disabled={status === 'submitting'}
                aria-label="Votre adresse email"
              />
              <button
                type="submit"
                className={styles.button}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Envoi…' : 'Je m\'abonne'}
              </button>
            </div>

            {status === 'error' && (
              <p className={styles.error}>{errorMessage}</p>
            )}

            <p className={styles.legal}>
              Une newsletter par semaine. Désinscription en un clic.{' '}
              <a
                href="https://buttondown.com/refer/experttoproduct"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.poweredBy}
              >
                Powered by Buttondown
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
