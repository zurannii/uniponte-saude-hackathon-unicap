import { Heart } from "lucide-react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { FormField } from "../../../components/ui/FormField";
import { Input } from "../../../components/ui/Input";

export function UniversityLoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/universidade/dashboard");
  }

  return (
    <div className="login-shell">
      <Card className="login-card">
        <CardHeader>
          <div className="cluster" style={{ justifyContent: "center" }}>
            <span className="icon-chip">
              <Heart size={22} />
            </span>
          </div>
          <CardTitle style={{ textAlign: "center", marginTop: "1rem" }}>Uniponte Saúde</CardTitle>
          <CardDescription style={{ textAlign: "center" }}>
            Acesse o painel da sua instituição e acompanhe a operação acadêmica.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="stack" onSubmit={handleSubmit}>
            <FormField htmlFor="email" label="E-mail institucional">
              <Input id="email" placeholder="usuario@universidade.edu.br" required type="email" />
            </FormField>

            <FormField htmlFor="password" label="Senha">
              <Input id="password" placeholder="••••••••" required type="password" />
            </FormField>

            <Button type="submit">Entrar</Button>

            <div className="cluster" style={{ justifyContent: "space-between" }}>
              <a className={buttonClassName({ className: "button--ghost", variant: "ghost" })} href="#">
                Esqueci minha senha
              </a>
              <Link className={buttonClassName({ variant: "secondary" })} to="/">
                Voltar para o portal
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

