import { useState } from "react";
import { Building2, FileText, Palette, Users } from "lucide-react";
import { PageHeader } from "../../../components/common/PageHeader";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { FormField } from "../../../components/ui/FormField";
import { Input } from "../../../components/ui/Input";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";

type TabKey = "institution" | "users" | "branding" | "terms";

export function SettingsPage() {
  const settings = universityService.getSettingsOverview();
  const [activeTab, setActiveTab] = useState<TabKey>("institution");

  return (
    <div className="page-stack">
      <PageHeader
        description="Centralize dados institucionais, perfis de acesso e preferências visuais."
        title="Configurações"
      />

      <div className="panel-tabs">
        <button className="panel-tabs__button" data-active={activeTab === "institution"} onClick={() => setActiveTab("institution")} type="button">
          Instituição
        </button>
        <button className="panel-tabs__button" data-active={activeTab === "users"} onClick={() => setActiveTab("users")} type="button">
          Usuários
        </button>
        <button className="panel-tabs__button" data-active={activeTab === "branding"} onClick={() => setActiveTab("branding")} type="button">
          Identidade visual
        </button>
        <button className="panel-tabs__button" data-active={activeTab === "terms"} onClick={() => setActiveTab("terms")} type="button">
          Termos
        </button>
      </div>

      {activeTab === "institution" ? (
        <Card>
          <CardHeader>
            <div className="cluster">
              <span className="icon-chip">
                <Building2 size={18} />
              </span>
              <div>
                <CardTitle>Dados da instituição</CardTitle>
                <CardDescription>Informações usadas no painel e na página pública.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="stack">
            <div className="form-grid">
              <FormField htmlFor="organizationName" label="Nome da instituição">
                <Input defaultValue={settings.institution.organizationName} id="organizationName" />
              </FormField>
              <FormField htmlFor="department" label="Unidade ou departamento">
                <Input defaultValue={settings.institution.department} id="department" />
              </FormField>
            </div>

            <div className="form-grid">
              <FormField htmlFor="cnpj" label="CNPJ">
                <Input defaultValue={settings.institution.cnpj} id="cnpj" />
              </FormField>
              <FormField htmlFor="phone" label="Telefone">
                <Input defaultValue={settings.institution.phone} id="phone" />
              </FormField>
            </div>

            <FormField htmlFor="address" label="Endereço completo">
              <Input defaultValue={settings.institution.address} id="address" />
            </FormField>

            <FormField htmlFor="email" label="E-mail de contato">
              <Input defaultValue={settings.institution.email} id="email" type="email" />
            </FormField>

            <Button>Salvar alterações</Button>
          </CardContent>
        </Card>
      ) : null}

      {activeTab === "users" ? (
        <div className="grid grid--two">
          <Card>
            <CardHeader>
              <div className="toolbar">
                <div className="cluster">
                  <span className="icon-chip">
                    <Users size={18} />
                  </span>
                  <div>
                    <CardTitle>Usuários e permissões</CardTitle>
                    <CardDescription>Pessoas com acesso ao painel institucional.</CardDescription>
                  </div>
                </div>
                <Button>Adicionar usuário</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="profile-list">
                {settings.users.map((user) => (
                  <div className="profile-item" key={user.id}>
                    <div>
                      <p className="profile-item__title">{user.name}</p>
                      <p className="profile-item__text">{user.email}</p>
                    </div>
                    <StatusBadge label={user.role} tone="neutral" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perfis de acesso</CardTitle>
              <CardDescription>Funções disponíveis no ecossistema da clínica-escola.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="profile-list">
                {settings.profiles.map((profile) => (
                  <div className="mini-card" key={profile.role}>
                    <h4>{profile.role}</h4>
                    <p>{profile.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {activeTab === "branding" ? (
        <Card>
          <CardHeader>
            <div className="cluster">
              <span className="icon-chip">
                <Palette size={18} />
              </span>
              <div>
                <CardTitle>Identidade visual</CardTitle>
                <CardDescription>Aparência da experiência pública e institucional.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="stack">
            <div className="mini-card">
              <h4>Logo institucional</h4>
              <p>Separar branding em um módulo próprio facilita novas universidades e white-label no futuro.</p>
            </div>
            <div className="form-grid">
              <FormField htmlFor="primaryColor" label="Cor primária">
                <Input defaultValue="#0d6efd" id="primaryColor" type="color" />
              </FormField>
              <FormField htmlFor="secondaryColor" label="Cor de apoio">
                <Input defaultValue="#198754" id="secondaryColor" type="color" />
              </FormField>
            </div>
            <Button>Salvar identidade visual</Button>
          </CardContent>
        </Card>
      ) : null}

      {activeTab === "terms" ? (
        <Card>
          <CardHeader>
            <div className="cluster">
              <span className="icon-chip">
                <FileText size={18} />
              </span>
              <div>
                <CardTitle>Termos de consentimento</CardTitle>
                <CardDescription>Textos legais exibidos para usuários e responsáveis.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="stack">
            <div className="mini-card">
              <h4>Termos de uso</h4>
              <p>{settings.legalTerms.termsOfUse}</p>
            </div>
            <div className="mini-card">
              <h4>Política de privacidade</h4>
              <p>{settings.legalTerms.privacyPolicy}</p>
            </div>
            <Button>Salvar termos</Button>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

