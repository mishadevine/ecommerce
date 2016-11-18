// Render the button into the container element

    paypal.Button.render({

        // Pass the client ids to use to create your transaction on sandbox and production environments

        client: {
            sandbox:    'Acc1FhXZmc7YGyyh1CaEpBQFvm7WeXHeOT0w4_qFQHN-Q4eba2oMdoLYAuNyEIlnCZ2aEpKhay-JzztR', // from https://developer.paypal.com/developer/applications/
            production: 'AVX1JkuwuF2taI8WYzH7tQrMffZkpM5LCB6j8QWkxl3wnXmpXrlJnClc2v2penjPONBAv7S59TtrMOkF'  // from https://developer.paypal.com/developer/applications/
        },

        // Pass the payment details for your transaction
        // See https://developer.paypal.com/docs/api/payments/#payment_create for the expected json parameters

        payment: function() {
            return paypal.rest.payment.create(this.props.env, this.props.client, {
                transactions: [
                    {
                        amount: {
                            total:  '0.02',
                            currency: 'USD'
                        }
                    }
                ]
            });
        },

        // Display a "Pay Now" button rather than a "Continue" button

        commit: true,

        // Pass a function to be called when the customer completes the payment

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                console.log('The payment was completed!');
                window.location = "/payment";
            });
        },

        // Pass a function to be called when the customer cancels the payment

        onCancel: function(data) {
            console.log('The payment was cancelled!');
        }

    }, '#paypal-button');
