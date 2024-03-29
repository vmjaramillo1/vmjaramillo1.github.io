import GlobalContainer from "@global/GlobalContainer";
import GlobalEducationItem from "@global/GlobalEducationItem";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";

AOS.init();

const experienceItems = [
  {
    index: 1,
    dateTitle: "2020 - now",
    title: "Front Developer",
    subtitle: "Business IT",
    body: "Participé en el desarrollo de la plataforma EVA, desempeñándome como Frontend Developer. Durante mi trabajo, desarrollé diversos flujos para la comercialización masiva de seguros en colaboración con el equipo de desarrollo del Broker de Seguros NOVA.",
  },
  {
    index: 2,
    dateTitle: "2018 - 2020",
    title: "Analista - Desarrollador",
    subtitle: "UTPL",
    body: "En mi rol de Analista Desarrollador en la UTPL, realicé diversas actividades que incluyen análisis de requisitos, diseño de bases de datos, diseño de servicios web, desarrollo de aplicativos, definición y documentación de procesos institucionales, entre otras.",
  },
  {
    index: 3,
    dateTitle: "2016 - 2018",
    title: "Freelancer",
    subtitle: "Querscur Dev",
    body: "Participe en proyectos de diferentes áreas, incluyendo educación, gestión de recursos humanos y marketing. Como trabajador independiente, he realizado diversas tareas que abarcan desde el análisis de requisitos, diseño de arquitectura de soluciones, diseño de BD, desarrollo de aplicaciones web, entre otros.",
  },
];

const educationItems = [
  {
    index: 1,
    dateTitle: "2020 - 2022",
    title: "Master en Inteligencia Artificial",
    subtitle: "Universidad Internacional de La Rioja ",
    body: "Maestría orientada a la adquisición de conocimientos teóricos y prácticos que permitan implementar soluciones basadas en inteligencia artificial como son: agentes inteligentes, procesamiento de lenguaje natural, modelos de machine learning, redes neuronales, entre otros.",
  },
  {
    index: 2,
    dateTitle: "2010 - 2016",
    title: "Ing. en Sistemas Informáticos",
    subtitle: "Universidad Técnica Particular de Loja",
    body: "Ingenieria orientada al estudio de sistemas informaticos y computacion, enfoada en la adquisiedon de conocimientos y capacidades técnicas para diseñar e implementar soluciones computacionales que integren métodos de software y tecnologías de vanguardia.",
  },
  {
    index: 3,
    dateTitle: "2008 - 2010",
    title: "Bachiller en Ciencias",
    subtitle: "José Antonio Eguiguren “La Salle”",
    body: "Bachillerato orientado a la adquisiendo de conocimiento en las áreas de Matemática, Lengua y Literatura, Ciencias Naturales, Ciencias Sociales, Educación Cultural y Artística, Educación Física, Lengua extrajera y módulos interdisciplinarios optativos.",
  },
];

const educationSection = () => {
  return (
    <section
      id="education-section"
      className="bg-neutral-alternative1-900 pb-0"
    >
      <GlobalContainer contentSize="xl">
        <div className="flex min-h-screen items-center pt-[55px]">
          <div className="grid grid-cols-12 gap-x-m-l pt-[55px]">
            {/* TITLE SECCTION */}
            <div className="col-span-full text-center">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Mi Resumen
              </h2>
              <div
                className="relative mx-auto mb-40 h-[1px] w-32 bg-primary-500 before:absolute before:left-[-40px] before:h-[1px] before:w-32 before:bg-neutral-alternative1-400 after:absolute after:right-[-40px] after:h-[1px] after:w-32 after:bg-neutral-alternative1-400"
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              />
            </div>

            <div
              className="col-span-12 mx-m mb-2xl md:col-span-6 md:mx-0 md:mb-0 md:pt-xl"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <GlobalTypography
                variant="h2"
                className=" mb-l leading-[1.8rem] text-white"
              >
                Experiencia
              </GlobalTypography>

              {experienceItems.map((item, index) => (
                <GlobalEducationItem
                  key={index}
                  index={item.index}
                  dateTitle={item.dateTitle}
                  title={item.title}
                  subtitle={item.subtitle}
                  body={item.body}
                />
              ))}
            </div>
            <div
              className="col-span-12 mx-m mb-xl md:col-span-6 md:mx-0 md:mb-0 md:pt-xl"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <GlobalTypography
                variant="h2"
                className="mb-l leading-[1.8rem] text-white"
              >
                Educación
              </GlobalTypography>
              {educationItems.map((item, index) => (
                <GlobalEducationItem
                  key={index}
                  index={item.index}
                  dateTitle={item.dateTitle}
                  title={item.title}
                  subtitle={item.subtitle}
                  body={item.body}
                />
              ))}
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default educationSection;
