// CHECK: https://www.mercadopago.com.br/developers/pt/reference/payments/_payments/post
// in "Parâmetros de resposta"
interface IDonation {
  id: number;
  date_created: string;
  date_approved: string | null;
  date_last_updated: string;
  date_of_expiration: string;
  money_release_date: string | null;
  money_release_status: string | null;
  operation_type: string;
  issuer_id: string;
  payment_method_id: string;
  payment_type_id: 'account_money' | 'ticket' | 'bank_transfer' | 'atm' | 'credit_card' | 'debit_card' | 'prepaid_card' | 'digital_currency' | 'digital_wallet' | 'voucher_card' | 'crypto_transfer';
  payment_method: {
    id: string;
    type: string;
    issuer_id: string;
  };
  status: 'pending' | 'approved' | 'authorized' | 'in_process' | 'in_mediation' | 'rejected' | 'cancelled' | 'refunded' | 'charged_back';
  status_detail: 'Accredited' | 'pending_contingency' | 'pending_review_manual' | 'cc_rejected_bad_filled_date' | 'cc_rejected_bad_filled_other' | 'cc_rejected_bad_filled_security_code' | 'cc_rejected_blacklist' | 'cc_rejected_call_for_authorize' | 'cc_rejected_card_disabled' | 'cc_rejected_duplicated_payment' | 'cc_rejected_high_risk' | 'cc_rejected_insufficient_amount' | 'cc_rejected_invalid_installments' | 'cc_rejected_max_attempts' | 'cc_rejected_other_reason';
  currency_id: 'ARS' | 'BRL' | 'CLP' | 'MXN' | 'COP' | 'PEN' | 'UYU' | 'VES' | 'MCN' | 'BTC' | 'USD' | 'USDP' | 'DCE' | 'ETH' | 'FDI' | 'CDB';
  description: string;
  live_mode: boolean;
  sponsor_id: number | null;
  authorization_code: string | null;
  money_release_schema: string | null;
  taxes_amount: number;
  counter_currency: string | null;
  brand_id: string | null;
  shipping_amount: number;
  build_version: string;
  pos_id: string | null;
  store_id: string | null;
  integrator_id: string | null;
  platform_id: string | null;
  corporation_id: string | null;
  payer: {
    type: string | null;
    id: string;
    operator_id: string | null;
    email: string | null;
    identification: {
      type: string | null;
      number: string | null;
    };
    phone: {
      area_code: string | null;
      number: string | null;
      extension: string | null;
    };
    first_name: string | null;
    last_name: string | null;
    entity_type: string | null;
  };
  collector_id: number;
  marketplace_owner: string | null;
  metadata: object;
  additional_info: {
    available_balance: number | null;
    nsu_processadora: string | null;
    authentication_code: string | null;
  };
  order: object;
  external_reference: string | null;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  differential_pricing_id: string | null;
  financing_group: string | null;
  deduction_schema: string | null;
  callback_url: string | null;
  installments: number;
  transaction_details: {
    payment_method_reference_id: string | null;
    acquirer_reference: string | null;
    net_received_amount: number;
    total_paid_amount: number;
    overpaid_amount: number;
    external_resource_url: string | null;
    installment_amount: number;
    financial_institution: string | null;
    payable_deferral_period: string | null;
    bank_transfer_id: string | null;
    transaction_id: string | null;
  };
  fee_details: Array<object>;
  charges_details: Array<{
    id: string;
    name: string;
    type: string;
    accounts: {
      from: string;
      to: string;
    };
    client_id: number;
    date_created: string;
    last_updated: string;
    amounts: {
      original: number;
      refunded: number;
    };
    metadata: object;
    reserve_id: string | null;
    refund_charges: Array<object>;
  }>;
  captured: boolean;
  binary_mode: boolean;
  call_for_authorize_id: string | null;
  statement_descriptor: string | null;
  card: object;
  notification_url: string;
  refunds: Array<object>;
  processing_mode: string;
  merchant_account_id: string | null;
  merchant_number: string | null;
  acquirer_reconciliation: Array<object>;
  type: string;
  business_info: {
    unit: string;
    sub_unit: string;
  };
  location: {
    state_id: string | null;
    source: string | null;
  };
  application_data: {
    name: string | null;
    version: string | null;
  };
  point_of_interaction: {
    transaction_data: {
      qr_code: string;
      bank_transfer_id: string | null;
      transaction_id: string | null;
      e2e_id: string | null;
      financial_institution: string | null;
      ticket_url: string;
      bank_info: {
        payer: {
          account_id: string | null;
          id: string | null;
          long_name: string | null;
          external_account_id: string | null;
        };
        collector: {
          account_id: string | null;
          long_name: string | null;
          account_holder_name: string;
          transfer_account_id: string | null;
        };
        is_same_bank_account_owner: boolean | null;
        origin_bank_id: string | null;
        origin_wallet_id: string | null;
      };
      qr_code_base64: string;
    }
  }
}

export default IDonation;
