import { FormEvent, useState } from 'react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setSuccess('');
      setError('Please enter your email');
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setSuccess('');
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setSuccess('Subscription successful. Thanks for joining our newsletter!');
    setEmail('');
  };

  return (
    <section id="subscribe" className="content__subscribe">
      <div className="product__title">
        <h2 className="description__heading subscribe__heading">Subscribe</h2>
        <p className="subscribe__text">Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <form className="subscribe__input" onSubmit={handleSubmit} noValidate>
        <input
          className={`input__text${error ? ' input__text--error' : ''}`}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(error)}
        />
        <button className="input__button" type="submit">
          Subscribe
        </button>
      </form>
      {error ? (
        <p className="subscribe__error" role="alert">
          {error}
        </p>
      ) : null}
      {success ? (
        <div className="subscribe__alert" role="status" aria-live="polite">
          <span className="subscribe__alert-mark">✓</span>
          <p>{success}</p>
        </div>
      ) : null}
    </section>
  );
}
