import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

type Props = {};

const CannabisForm = (props: Props) => {
  const [salutation, setSalutation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [house, setHouse] = useState<string>("");
  const [addressSuplement, setAddressSuplement] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [prescription, setPrescription] = useState<string>("");
  const [shippingMethod, setShippingMethod] = useState<string>(
    "Free of charge: DHL IdentCheck"
  );
  const [paymentMethod, setPaymentMethod] = useState<string>("Klarna");
  const [tick1, setTick1] = useState<boolean>(false);
  const [tick2, setTick2] = useState<boolean>(false);

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (
      files &&
      files.length > 0 &&
      files[0].name
        .split(".")
        [files[0].name.split(".").length - 1].toLowerCase() === "pdf" &&
      files[0].name
        .split(".")
        [files[0].name.split(".").length - 1].toLowerCase() === "jpeg"
    ) {
      setSelectedFile(files[0].name);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = () => {
    console.log({
      salutation,
      firstName,
      lastName,
      street,
      house,
      addressSuplement,
      postalCode,
      city,
      dateOfBirth,
      email,
      phone,
      prescription,
      shippingMethod,
      paymentMethod,
      tick1,
      tick2,
      selectedFile,
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Salutation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={salutation}
            required
            label="Salutation"
            onChange={(e) => setSalutation(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Dr."}>Dr.</MenuItem>
            <MenuItem value={"Prof."}>Prof.</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="First name"
            variant="outlined"
            margin="dense"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last name"
            variant="outlined"
            margin="dense"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Delivery address: Street"
            variant="outlined"
            margin="dense"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            label="Delivery address: house number"
            variant="outlined"
            margin="dense"
            required
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
          <TextField
            label="address supplement"
            variant="outlined"
            margin="dense"
            required
            value={addressSuplement}
            onChange={(e) => setAddressSuplement(e.target.value)}
          />
          <TextField
            label="Delivery address: postal code"
            variant="outlined"
            margin="dense"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <TextField
            label="Delivery address: City"
            variant="outlined"
            margin="dense"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="Your date of birth"
            variant="outlined"
            margin="dense"
            required
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <TextField
            label="Your email"
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="phone number"
            variant="outlined"
            margin="normal"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="prescription number"
            variant="outlined"
            margin="dense"
            required
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <InputLabel
          htmlFor="file-input"
          sx={{ textAlign: "start", fontWeight: "bold" }}
        >
          Please upload a photo of your recipe here.
        </InputLabel>
        <Input
          sx={{
            background: "#fff",
            borderRadius: "0px",
            padding: "100px",
            border: "2px dashed #94AB8A",
            fontSize: "16px",
          }}
          id="file-input"
          type="file"
          value={selectedFile}
          inputProps={{ accept: "image/*" }}
          onChange={handleFileInputChange}
        />
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              display: "flex",
              justifyContent: "start",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Shipping method:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
          >
            <FormControlLabel
              value="Free of charge: DHL IdentCheck"
              control={<Radio color="secondary" />}
              label="Free of charge: DHL IdentCheck"
            />
            <FormControlLabel
              value="Free of charge: Pick up at the pharmacy (Leipzig)"
              control={<Radio color="secondary" />}
              label="Free of charge: Pick up at the pharmacy (Leipzig)"
            />
            <FormControlLabel
              value="For 9.99 euros: Go! Overnight Express"
              control={<Radio color="secondary" />}
              label="For 9.99 euros: Go! Overnight Express"
            />
          </RadioGroup>
        </FormControl>
        <p className="red-text">
          <a
            href="https://www.gruenhorn.de/cannabis-lieferung/"
            target="_blank"
          >
            DHL IdentCheck: For technical reasons, identification is only
            possible with a German ID document.{" "}
          </a>
          <a
            href="https://www.gruenhorn.de/cannabis-rezept-hochladen/#sonderbedingungen-overnight"
            target="_blank"
          >
            The GO! Overnight express shipping is Monday - Thursday only.
            Caution! Please note special conditions!
          </a>
        </p>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              display: "flex",
              justifyContent: "start",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Payment method:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              e.target.value === "The invoice" ? setTick1(!tick1) : null;
            }}
          >
            <FormControlLabel
              value="Klarna"
              control={<Radio color="secondary" />}
              label="Klarna"
            />
            <FormControlLabel
              value="The invoice"
              control={<Radio color="secondary" />}
              label="The invoice"
            />
          </RadioGroup>
        </FormControl>
        <FormGroup sx={{ marginTop: "1rem" }}>
          <FormControlLabel
            sx={{
              alignItems: "start",
              textAlign: "left",
              marginBottom: "1rem",
              display: paymentMethod === "Klarna" ? "inline-flex" : "none",
            }}
            value={tick1}
            onChange={() => setTick1(!tick1)}
            control={<Checkbox color="secondary" />}
            label={
              <p className="checkbox-label">
                I hereby agree that my (health) data{" "}
                <a
                  href="https://www.gruenhorn.de/datenschutz/#klarna"
                  target="_blank"
                  className="black-link"
                >
                  described in the Grünhorn data protection information under
                  8.1
                </a>{" "}
                may be passed on to the payment service provider Klarna AB and
                processed there. You can revoke your consent at any time.
              </p>
            }
          />
          <FormControlLabel
            sx={{ alignItems: "start", textAlign: "left" }}
            control={<Checkbox color="secondary" />}
            value={tick2}
            onChange={() => setTick2(!tick2)}
            label={
              <p className="checkbox-label">
                By placing an order by clicking on the "Redeem" button, you
                agree to our{" "}
                <a
                  href="https://www.gruenhorn.de/agb/"
                  target="_blank"
                  className="black-link"
                >
                  General Terms
                </a>{" "}
                and Conditions and{" "}
                <a
                  href="https://www.gruenhorn.de/datenschutz/"
                  target="_blank"
                  className="black-link"
                >
                  data protection information.
                </a>{" "}
                This includes passing on your e-mail address to the shipping
                service provider for information about the sending status of
                your order.
              </p>
            }
          />
        </FormGroup>
        <p className="additional-text">
          Notice for payment method Klarna: By continuing, you accept the{" "}
          <a
            href="https://cdn.klarna.com/1.0/shared/content/legal/terms/0/de_de/user"
            target="_blank"
            className="black-link"
          >
            terms of the Klarna Shopping Service
          </a>{" "}
          and confirm that you have read the Klarna{" "}
          <a
            href="https://cdn.klarna.com/1.0/shared/content/legal/terms/0/de_de/privacy"
            target="_blank"
            className="black-link"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://cdn.klarna.com/1.0/shared/content/legal/terms/0/de_de/cookie_purchase"
            target="_blank"
            className="black-link"
          >
            Cookie Notice.
          </a>
        </p>
      </Grid>

      <Grid item xs={12} md={12}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
          onClick={() => handleSubmit()}
          disabled={
            salutation === "" ||
            firstName === "" ||
            lastName === "" ||
            street === "" ||
            house === "" ||
            addressSuplement === "" ||
            postalCode === "" ||
            city === "" ||
            dateOfBirth === "" ||
            email === "" ||
            phone === "" ||
            prescription === "" ||
            tick1 === false ||
            tick2 === false
          }
        >
          REDEEM
        </Button>
      </Grid>
    </Grid>
  );
};

export default CannabisForm;
