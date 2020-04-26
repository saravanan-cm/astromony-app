import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useContainedCardHeaderStyles } from "@mui-treasury/styles/cardHeader/contained";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";

const useStyles = makeStyles(({ spacing }) => ({
	card: {
		marginTop: 40,
		// borderRadius: spacing(0.5),
		transition: "0.3s",
		width: "90%",
		overflow: "initial",
		background: "#ffffff",
	},
	content: {
		textAlign: "left",
		overflowX: "auto",
	},
}));

function onChange(){

}

function onSubmit(){
  
}

const ElevatedHeaderCard = () => {
	const classes = useStyles();
	const cardHeaderStyles = useContainedCardHeaderStyles();
	const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();
  const errors = {};
  const state = {};
	return (
		<Card className={cx(classes.card, cardShadowStyles.root)}>
			<CardHeader
				className={cardHeaderShadowStyles.root}
				classes={cardHeaderStyles}
				title={"Login"}
			/>
			<CardContent className={classes.content}>
				<form noValidate onSubmit={onSubmit}>
					<div className='input-field col s12'>
						<TextField
							onChange={onChange}
							value={state.email}
							error={errors.email}
							id='outlined-basic'
							name='email'
							type='email'
							className={classnames("", {
								invalid: errors.email || errors.emailnotfound,
							})}
							style={{ width: "100%" }}
							label='Email'
							variant='outlined'
						/>
						<span className='red-text'>
							{errors.email}
							{errors.emailnotfound}
						</span>
					</div>
					<div className='input-field col s12'>
						<TextField
							onChange={onChange}
							value={state.password}
							error={errors.password}
							id='outlined-basic'
							name='password'
							type='password'
							className={classnames("", {
								invalid:
									errors.password || errors.passwordincorrect,
							})}
							style={{
								width: "100%",
								marginTop: "0.5rem",
							}}
							label='Password'
							variant='outlined'
						/>
						<span className='red-text'>
							{errors.password}
							{errors.passwordincorrect}
						</span>
					</div>
					<div
						style={{
							display: "inline-block",
							width: "100%",
							fontSize: "12px",
						}}>
						<p
							className='grey-text text-darken-1'
							style={{ float: "left" }}>
							<Link to='/forget-password'>Forget Password?</Link>
						</p>
						<p
							className='grey-text text-darken-1'
							style={{ float: "right" }}>
							Don't have an account?{" "}
							<Link to='/register'>Register</Link>
						</p>
					</div>
					<div
						className='col s12'
						style={{
							paddingLeft: "11.250px",
							display: "flex",
							justifyContent: "center",
						}}>
						<Button
							type='submit'
							variant='contained'
							style={{
								marginTop: "1rem",
								fontFamily: "Sailec-Bold,Helvetica,sans-serif",
								fontWeight: "bold",
								letterSpacing: "1px",
								color: "#fff",
								backgroundColor: "#22ba6a",
							}}>
							LogIn
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default ElevatedHeaderCard;
