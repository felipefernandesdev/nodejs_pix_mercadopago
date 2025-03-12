export type PaymentResponse = {
  accounts_info: null;
  acquirer_reconciliation: any[];
  additional_info: {
    tracking_id: string;
  };
  authorization_code: null;
  binary_mode: boolean;
  brand_id: null;
  build_version: string;
  call_for_authorize_id: null;
  callback_url: null;
  captured: boolean;
  card: Record<string, any>;
  charges_details: {
    accounts: {
      from: string;
      to: string;
    };
    amounts: {
      original: number;
      refunded: number;
    };
    client_id: number;
    date_created: string;
    id: string;
    last_updated: string;
    metadata: {
      source: string;
    };
    name: string;
    refund_charges: any[];
    reserve_id: null;
    type: string;
  }[];
  collector_id: number;
  corporation_id: null;
  counter_currency: null;
  coupon_amount: number;
  currency_id: string;
  date_approved: null;
  date_created: string;
  date_last_updated: string;
  date_of_expiration: string;
  deduction_schema: null;
  description: string;
  differential_pricing_id: null;
  external_reference: null;
  fee_details: any[];
  financing_group: null;
  id: number;
  installments: number;
  integrator_id: null;
  issuer_id: string;
  live_mode: boolean;
  marketplace_owner: null;
  merchant_account_id: null;
  merchant_number: null;
  metadata: Record<string, any>;
  money_release_date: null;
  money_release_schema: null;
  money_release_status: string;
  notification_url: null;
  operation_type: string;
  order: Record<string, any>;
  payer: {
    email: null;
    entity_type: null;
    first_name: null;
    id: string;
    identification: {
      number: null;
      type: null;
    };
    last_name: null;
    phone: {
      area_code: null;
      extension: null;
      number: null;
    };
    type: null;
  };
  payment_method: {
    id: string;
    issuer_id: string;
    type: string;
  };
  payment_method_id: string;
  payment_type_id: string;
  platform_id: null;
  point_of_interaction: {
    application_data: {
      name: null;
      version: null;
    };
    business_info: {
      branch: null;
      sub_unit: string;
      unit: string;
    };
    location: {
      source: null;
      state_id: null;
    };
    transaction_data: {
      bank_info: {
        collector: {
          account_holder_name: string;
          account_id: null;
          long_name: null;
          transfer_account_id: null;
        };
        is_same_bank_account_owner: null;
        origin_bank_id: null;
        origin_wallet_id: null;
        payer: {
          account_holder_name: null;
          account_id: null;
          branch: null;
          external_account_id: null;
          id: null;
          identification: {
            number: null;
            type: null;
          };
          long_name: null;
        };
      };
      bank_transfer_id: null;
      e2e_id: null;
      financial_institution: null;
      qr_code: string;
      qr_code_base64: string;
    };
  };
};