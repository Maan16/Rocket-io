import React, { useState } from 'react';
import classNames from 'classnames';
import { Select, Form, Input, Button } from 'antd';
import { SectionProps } from '../utils/SectionProps';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
	className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
			<section
			{...props}
			className={outerClasses}
			>
				<div className="container">
					<div className={innerClasses}>
					<div className="hero-content mb-0 mt-0 center">
						<div className="center-div">
						<div className="calculator-heading">
							<h2 style={{color :"rgb(219,100,36)"}}>CONTACT FORM</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
						</div>
						<Form className="" onFinish=''>
							<div>
								<label className="label-row">Name</label>
                					<div className="item-row">
									<Form.Item
										className="form-fields"
										name="Enter Full Name"
										initialValue=''
									>
										<Input
											className={''}
											placeholder="Enter Full Name"
											type="text"
											onChange={(e) => ''}
										/>
									</Form.Item>
								</div>
								
							</div>

              			<div className="form-row">
							<label className="label-row">Email</label>
               			<div className="item-row">
									<Form.Item
										className="form-fields"
										name="Email"
										initialValue=''
									>
										<Input
											className={''}
											placeholder="Email"
											type="text"
											onChange={(e) => ''}
										/>
									</Form.Item>
								</div>
								<div className="form-row">
								<label className="item-label">Contact No</label>
								<div className="item-row">
									<Form.Item
										className="form-fields"
										name="Contact No"
										initialValue=''
									>
										<Input
											className={''}
											placeholder="contact"
											type="number"
											onChange={(e) => ''}
										/>
									</Form.Item>
									<div className="item-row">
										<label className="label-row"> Type Your Message Here </label>
											<Form.Item
												className="form-fields"
												name="text"
											>
												<Input.TextArea maxLength={100} placeholder="Type your message here..." />
											</Form.Item>
												<br/>
											<Button type="primary">Submit</Button>
									</div>
								</div>
							</div>
						</div>
					</Form>
				</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;