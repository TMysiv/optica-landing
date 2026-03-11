import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  useTheme,
  useMediaQuery,
  Paper,
  IconButton, Autocomplete
} from '@mui/material';
import { beautifyErrors, houseTypes, regions, services, speeds } from '../../helpers';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { CustomButton } from '../Custom/CustomButton';
import { PhoneMask } from '../Masks/PhoneMask';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { offerCreateSchema } from '../../validation/offerCreateSchema';
import { CustomModal } from '../Custom/CustomModal';
import { Offer, ValidationErrors } from '../../types';
import { createOffer } from '../../services/api.service';
import data from '../../addreska.json';

const formSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Підключення інтернету GPON",
  "provider": { "@type": "Organization", "name": "Укртелеком" },
  "areaServed": "UA",
  "availableLanguage": "Ukrainian"
};

const initialOffer: Offer = {
  service: 'Інтернет',
  isMash: false,
  countMash: 1,
  speed: '1000 МБіт/с',
  typeOfHouse: 'В квартиру',
  region: '',
  city: '',
  street: '',
  house: '',
  flat: '',
  username: '',
  phone: '',
  note: '',
};

export const Form = () => {
  const [offer, setOffer] = useState<Offer>(initialOffer);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors<Offer>>({});
  const [openModal, setOpenModal] = useState<boolean>(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(600));
  const isS = useMediaQuery(theme.breakpoints.down(765));

  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;

    setOffer((prevOffer) => ({
      ...prevOffer,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAutoCompleteChange = (name: string, value: string) => {
    setOffer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createMenuItemArray = (
    items: {id: number; value: string}[],
  ) => items.map((item) => (
    <MenuItem key={item.id} value={item.value}>
      {item.value}
    </MenuItem>
  ));

  useEffect(() => {
    const handler = (e: any) => {
      if (e?.detail) {
        setOffer((prevOffer) => ({
          ...prevOffer,
          [e.detail.name]: e.detail.value,
        }));
      }
    };

    window.addEventListener('scrollToForm', handler);
    return () => window.removeEventListener('scrollToForm', handler);
  }, []);

  const modal = () => {
    return (
      <Box className="flex flex-col items-center gap-5 mt-5 ">
        <h2 className="text-5xl font-extrabold text-cyan-500 text-center letter-spacing">Ваша заявка прийнята!</h2>
        <p className="text-white text-xl text-center letter-spacing">Наш менеджер зателефонує в найближчий час</p>
        <img src="/images/logo.svg" alt="Укртелеком — оптичний інтернет провайдер"/>
      </Box>
    )
  }

  const handleSaveOffer = async () => {
    try {
      const validateOffer = offerCreateSchema.validateSync(offer, {
        abortEarly: false,
      }) as Offer;
      setValidationErrors({});
      setOpenModal(true);
      await createOffer({
        ...validateOffer,
        note: validateOffer.note?.replace(/\s+/g, ' ')
      });
      // setOffer(initialOffer);
    } catch (errors) {
      setValidationErrors(beautifyErrors(errors));
    }
  };

  const cities = useMemo(() => {
    return offer.region
      ? Array.from(new Set(data.filter(d => d.region === offer.region).map(d => d.city)))
      : [];
  }, [offer.region])

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formSchema) }}
      />

      <Box
        className="form-section relative"
        component="section"
        aria-label="Форма заявки на підключення інтернету"
      >
        <Box className="w-full h-18 bg-cyan-500 rounded-top-left rounded-top-right"/>
        <Box
          className={`border-4 border-cyan-500 px-14 py-10 rounded-bottom-left rounded-bottom-right ${isXs ? 'flex flex-col items-center' : ''} form-block`}
          id="form-section"
        >
          <Grid
            container
            className="w-full"
            spacing={3}
          >

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                select
                label="Послуга"
                size="small"
                margin="none"
                name="service"
                onChange={handleChange}
                value={offer.service}
                required
                variant="standard"
                className="text-field"
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                error={Boolean( validationErrors.service )}
                helperText={validationErrors.service}
              >
                {createMenuItemArray( services )}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }} container>
              <Grid size={{ xs: 12 }}>
                <label className="flex items-center cursor-pointer">
                  <Checkbox
                    name="isMash"
                    checked={offer.isMash}
                    onChange={handleChange}
                    size="small"
                    sx={{
                      paddingLeft: 0,
                      color: '#fff',
                      '&.Mui-checked': {
                        color: '#fff',
                      },
                    }}
                  />
                  <span className="text-white text-lg">Потрібен Гігабітний Wi-Fi роутер</span>
                </label>

              </Grid>

              {offer.isMash && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      value={offer.countMash}
                      onChange={handleChange}
                      size="small"
                      name="countMash"
                      margin="none"
                      variant="standard"
                      inputMode="numeric"
                      type="number"
                      error={Boolean( validationErrors.countMash )}
                      helperText={validationErrors.countMash}
                      sx={{
                        width: "20px",
                        "& input": {
                          textAlign: "center",
                          height: '20px',
                          color: 'white',
                          borderColor: 'white',
                        },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                        "& input[type=number]::-webkit-outer-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "& input[type=number]::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                          borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "white",
                        },
                      }}
                    />
                    <Paper
                      elevation={0}
                      sx={{
                        border: "1px solid white",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        background: 'inherit',
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          padding: "2px",
                          width: 20,
                          height: 20,
                          color: 'white',
                        }}
                        onClick={() =>
                          setOffer( prev => ({
                            ...prev,
                            countMash: Math.max( prev.countMash - 1, 1 ),
                          }) )
                        }
                      >
                        <RemoveIcon fontSize="small"/>
                      </IconButton>
                    </Paper>

                    <Paper
                      elevation={0}
                      sx={{
                        border: "1px solid white",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        background: 'inherit',
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          padding: "2px",
                          width: 20,
                          height: 20,
                          color: 'white',
                        }}
                        onClick={() =>
                          setOffer( prev => ({
                            ...prev,
                            countMash: prev.countMash + 1,
                          }) )
                        }
                      >
                        <AddIcon fontSize="small"/>
                      </IconButton>
                    </Paper>
                  </Box>
                </Grid>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Швидкість"
                margin="none"
                name="speed"
                value={offer.speed}
                select
                onChange={handleChange}
                size="small"
                required
                variant="standard"
                className="text-field"
                error={Boolean( validationErrors.speed )}
                helperText={validationErrors.speed}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              >
                {createMenuItemArray( speeds )}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Тип Будинку"
                margin="none"
                name="typeOfHouse"
                value={offer.typeOfHouse}
                select
                onChange={handleChange}
                size="small"
                variant="standard"
                required
                className="text-field"
                error={Boolean( validationErrors.typeOfHouse )}
                helperText={validationErrors.typeOfHouse}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              >
                {createMenuItemArray( houseTypes )}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                options={regions}
                value={offer.region}
                onChange={(event, newValue) => {
                  handleAutoCompleteChange("region", newValue || "")
                  setOffer(prev => ({
                    ...prev,
                    city: ''
                  }));
                }}
                noOptionsText="Нічого не знайдено"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Область"
                    name="region"
                    margin="none"
                    size="small"
                    required
                    variant="standard"
                    className="text-field"
                    error={Boolean(validationErrors.region)}
                    helperText={validationErrors.region}
                    slotProps={{
                      inputLabel: { shrink: true }
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                options={cities}
                value={offer.city}
                onChange={(event, newValue) =>
                  handleAutoCompleteChange("city", newValue || "")
                }
                disabled={!offer.region}
                noOptionsText="Нічого не знайдено"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Населений пункт"
                    name="city"
                    margin="none"
                    size="small"
                    required
                    variant="standard"
                    className="text-field"
                    error={Boolean(validationErrors.city)}
                    helperText={validationErrors.city}
                    slotProps={{
                      inputLabel: { shrink: true }
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Вулиця"
                margin="none"
                name="street"
                value={offer.street}
                onChange={handleChange}
                placeholder="Шевченка"
                size="small"
                variant="standard"
                required
                className="text-field"
                error={Boolean( validationErrors.street )}
                helperText={validationErrors.street}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <TextField
                fullWidth
                label="Будинок"
                margin="none"
                name="house"
                value={offer.house}
                onChange={handleChange}
                placeholder="11"
                size="small"
                variant="standard"
                required
                className="text-field"
                error={Boolean( validationErrors.house )}
                helperText={validationErrors.house}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <TextField
                fullWidth
                label="Квартира"
                margin="none"
                name="flat"
                value={offer.flat}
                onChange={handleChange}
                placeholder="0"
                size="small"
                variant="standard"
                className="text-field"
                error={Boolean( validationErrors.flat )}
                helperText={validationErrors.flat}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Ваше ім'я"
                margin="none"
                name="username"
                value={offer.username}
                onChange={handleChange}
                size="small"
                variant="standard"
                required
                placeholder="Ваше ім'я"
                className="text-field"
                error={Boolean( validationErrors.username )}
                helperText={validationErrors.username}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                type="tel"
                margin="none"
                fullWidth
                label="Ваш телефон"
                name="phone"
                size="small"
                variant="standard"
                required
                placeholder="+38 (0__) ___ __ __"
                onChange={handleChange}
                value={offer.phone}
                className="text-field"
                error={Boolean( validationErrors.phone )}
                helperText={validationErrors.phone}
                InputProps={{
                  inputComponent: PhoneMask as any,
                  inputProps: {
                    error: Boolean( validationErrors.phone ),
                  },
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Примітка"
                margin="none"
                name="note"
                value={offer.note}
                onChange={handleChange}
                size="small"
                variant="standard"
                placeholder="Примітка"
                className="text-field"
                error={Boolean( validationErrors.note )}
                helperText={validationErrors.note}
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
              />
            </Grid>
          </Grid>
          <p
            role="note"
            className="agree-text max-w-[536px] mt-[18px] mb-[25px] text-[#D7D7D7] text-[11px] font-[350]"
          >
            Відправляючи Заявку, Ви даєте згоду АТ «Укртелеком» на обробку Ваших персональних даних відповідно до
            умов Закону України «Про захист персональних даних» **
          </p>
          <CustomButton
            text="ПІДКЛЮЧИТИ"
            width={247}
            className="bg-cyan-500 text-white hover:bg-yellow-850 hover:text-black text-xl mt-5"
            iconClassName="group-hover:text-yellow-850"
            handleClick={handleSaveOffer}
          />
          {!isS && (
            <img
              src="/images/mesh-router.png"
              alt="Wi-Fi роутер TP-Link Mercusys EasyMesh для GPON інтернету"
              className="w-45 h-70 absolute -right-7 -bottom-12"
              loading="lazy"
              width="180"
              height="282"
            />
          )}
          {openModal && (
            <CustomModal
              open={openModal}
              handleCLose={handleCloseModal}
              html={modal()}
              width={{ xs: "80%", md: "40%" }}
            />
          )}
          <span aria-hidden="true" className="ellipse ellipse-8"></span>
        </Box>
      </Box>
    </>
  )
}
