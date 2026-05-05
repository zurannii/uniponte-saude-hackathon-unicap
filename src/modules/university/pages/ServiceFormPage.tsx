import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "../../../components/common/PageHeader";
import { Button, buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";
import { FormField } from "../../../components/ui/FormField";
import { Input } from "../../../components/ui/Input";
import { Select } from "../../../components/ui/Select";
import { Textarea } from "../../../components/ui/Textarea";
import { universityService } from "../services/universityService";
import { ServiceFormValues } from "../types";

const emptyForm: ServiceFormValues = {
  name: "",
  area: "",
  description: "",
  campus: "",
  address: "",
  modality: "",
  cost: "",
  audience: "",
  vacancies: "",
  status: "active",
  responsible: "",
};

function mapServiceToFormValues(id: string | undefined): ServiceFormValues {
  if (!id) {
    return emptyForm;
  }

  const service = universityService.getServiceById(Number(id));
  if (!service) {
    return emptyForm;
  }

  return {
    name: service.name,
    area: service.area,
    description: service.description,
    campus: service.campus,
    address: service.address,
    modality: service.modality,
    cost: service.cost,
    audience: service.audience,
    vacancies: String(service.vacancies),
    status: service.status,
    responsible: service.responsible,
  };
}

export function ServiceFormPage() {
  const navigate = useNavigate();
  const params = useParams();
  const formOptions = universityService.getServiceFormOptions();
  const isEditing = Boolean(params.id);
  const initialState = useMemo(() => mapServiceToFormValues(params.id), [params.id]);
  const [formValues, setFormValues] = useState<ServiceFormValues>(initialState);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    universityService.saveService(formValues);
    navigate("/universidade/servicos");
  }

  return (
    <div className="page-stack">
      <PageHeader
        action={
          <Link className={buttonClassName({ variant: "secondary" })} to="/universidade/servicos">
            Voltar para serviços
          </Link>
        }
        description="Separe dados institucionais, público atendido e operacionalização para facilitar manutenção futura."
        title={isEditing ? "Editar serviço" : "Cadastrar novo serviço"}
      />

      <form className="stack" onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações básicas</CardTitle>
          </CardHeader>
          <CardContent className="stack">
            <div className="form-grid">
              <FormField htmlFor="name" label="Nome do serviço">
                <Input
                  id="name"
                  name="name"
                  onChange={updateField}
                  required
                  value={formValues.name}
                />
              </FormField>

              <FormField htmlFor="area" label="Área da saúde">
                <Select id="area" name="area" onChange={updateField} required value={formValues.area}>
                  <option value="">Selecione</option>
                  {formOptions.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            <FormField htmlFor="description" label="Descrição">
              <Textarea
                id="description"
                name="description"
                onChange={updateField}
                required
                value={formValues.description}
              />
            </FormField>

            <div className="form-grid">
              <FormField htmlFor="campus" label="Unidade ou campus">
                <Input
                  id="campus"
                  name="campus"
                  onChange={updateField}
                  required
                  value={formValues.campus}
                />
              </FormField>

              <FormField htmlFor="address" label="Endereço">
                <Input
                  id="address"
                  name="address"
                  onChange={updateField}
                  required
                  value={formValues.address}
                />
              </FormField>
            </div>

            <div className="form-grid">
              <FormField htmlFor="modality" label="Modalidade">
                <Select
                  id="modality"
                  name="modality"
                  onChange={updateField}
                  required
                  value={formValues.modality}
                >
                  <option value="">Selecione</option>
                  {formOptions.modalities.map((modality) => (
                    <option key={modality} value={modality}>
                      {modality}
                    </option>
                  ))}
                </Select>
              </FormField>

              <FormField htmlFor="cost" label="Custo">
                <Select id="cost" name="cost" onChange={updateField} required value={formValues.cost}>
                  <option value="">Selecione</option>
                  {formOptions.costs.map((cost) => (
                    <option key={cost} value={cost}>
                      {cost}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            <FormField htmlFor="audience" label="Público atendido">
              <Input
                id="audience"
                name="audience"
                onChange={updateField}
                required
                value={formValues.audience}
              />
            </FormField>

            <div className="form-grid">
              <FormField htmlFor="vacancies" label="Quantidade de vagas">
                <Input
                  id="vacancies"
                  min="0"
                  name="vacancies"
                  onChange={updateField}
                  required
                  type="number"
                  value={formValues.vacancies}
                />
              </FormField>

              <FormField htmlFor="status" label="Status">
                <Select
                  id="status"
                  name="status"
                  onChange={updateField}
                  required
                  value={formValues.status}
                >
                  <option value="active">Ativo</option>
                  <option value="paused">Pausado</option>
                  <option value="waitlist">Fila de espera</option>
                  <option value="closed">Encerrado</option>
                </Select>
              </FormField>
            </div>

            <FormField htmlFor="responsible" label="Responsável institucional">
              <Input
                id="responsible"
                name="responsible"
                onChange={updateField}
                required
                value={formValues.responsible}
              />
            </FormField>
          </CardContent>
        </Card>

        <div className="cluster">
          <Button type="submit">
            {isEditing ? "Salvar alterações" : "Salvar e publicar serviço"}
          </Button>
          <Link className={buttonClassName({ variant: "secondary" })} to="/universidade/servicos">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}

