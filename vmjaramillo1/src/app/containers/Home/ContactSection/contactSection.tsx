import { Controller, useForm } from "react-hook-form";
import { Parallax } from "react-parallax";
import GlobalContainer from "@global/GlobalContainer";
import GlobalTypography from "@global/GlobalTypography";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AOS from "aos";
import background from "app/assets/whatIDo/2.jpg";
import * as yup from "yup";

AOS.init();

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const yupScheme = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "El nombre debe contener por lo menos 3 caracteres")
    .max(70, "El nombre no debe contener más de 70 caracteres")
    .nullable(),
  email: yup
    .string()
    .nullable()
    .email("El formato del email es incorrecto")
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "El formato del email es incorrecto"
    )
    .max(100, "El email no debe contener más de 100 caracteres")
    .required("El email es obligatorio"),
  phone: yup
    .string()
    .nullable()
    .required("El telefono es obligatorio")
    .min(7, "El telefono debe contener por lo menos 7 caracteres")
    .max(15, "El telefono no debe contener más de 15 caracteres"),
  message: yup
    .string()
    .nullable()
    .required("El mensaje es obligatorio")
    .min(10, "El mensaje debe contener por lo menos 10 caracteres")
    .max(700, "El mensaje no debe contener más de 700 caracteres"),
});

const contactSection = () => {
  const { control, formState, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(yupScheme),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      id="contact-section"
      className="relative h-auto w-full bg-neutral-alternative1-900 from-neutral-alternative1-900 from-neutral-alternative1-900 to-transparent to-transparent bg-cover bg-center
      py-0 before:absolute before:bottom-0 before:left-0 before:z-10 before:h-1/6
      before:w-full before:bg-gradient-to-t after:absolute
      after:top-0 after:left-0 after:z-10 after:h-1/6 after:w-full after:bg-gradient-to-b"
    >
      <Parallax bgImage={background} strength={300}>
        <GlobalContainer contentSize="xl">
          <div className="flex min-h-screen items-center">
            <div className="grid w-full grid-cols-12">
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
                  Contact Me
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
              <div className="col-span-full">
                <div className="mx-auto mb-2xl text-center">
                  <form
                    id="contact_form"
                    className="grid grid-cols-12 gap-m md:mx-7xl"
                  >
                    <div className="col-span-4 mb-m">
                      <Controller
                        name="name"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            className="w-full"
                            value={value}
                            // label="name"
                            inputProps={{ className: "!text-white " }}
                            placeholder="Names"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-4 mb-m">
                      <Controller
                        name="email"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            className="w-full"
                            value={value}
                            inputProps={{ className: "!text-white " }}
                            placeholder="email"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-4 mb-m">
                      <Controller
                        name="phone"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            value={value}
                            className="w-full"
                            inputProps={{ className: "!text-white " }}
                            placeholder="phone"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-12 mb-m">
                      <Controller
                        name="message"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            value={value}
                            className="w-full"
                            multiline
                            rows={7}
                            inputProps={{ className: "!text-white " }}
                            placeholder="message"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                  </form>
                  <Button
                    variant="contained"
                    className="w-2/12 font-semibold text-white"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Contained
                  </Button>
                  <div className="mx-auto mt-l text-neutral-alternative1-300 md:flex md:w-4/6 md:justify-between">
                    <GlobalTypography variant="body1">
                      <span className="block pb-8 font-semibold text-white">
                        Email Me
                      </span>
                      contact@kyrosnoriaki.com
                    </GlobalTypography>
                    <GlobalTypography variant="body1">
                      <span className="block pb-8 font-semibold text-white">
                        Call Me
                      </span>
                      +1 700 333 92 96
                    </GlobalTypography>
                    <GlobalTypography variant="body1">
                      <span className="block pb-8 font-semibold text-white">
                        Address
                      </span>
                      Collins Street West,
                      <br /> Louisiana, Bayerfurt, USA
                    </GlobalTypography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </Parallax>
    </section>
  );
};

export default contactSection;
