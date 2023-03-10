import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import styles from './loginForm.module.scss'

const LoginForm = ({
  supabase,
}) => {
  if (!supabase) return null;
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.loginForm}>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#d46036',
                  brandAccent: '#b84117',
                },
              },
            },
          }}
          socialLayout="horizontal"
          providers={[]}
        />
      </div>
    </div>
  );
};

export default LoginForm;
