export interface CurrentLocationInfo {
  location_name: string
  full_address: string
}

export interface NextLocationInfo {
	location_name: string
	full_address: string
}

export interface TrackingRecord {
  tracking_code: string
  tracking_name: string
  description: string
  actual_time: number
  current_location: CurrentLocationInfo
  milestone_name: string
  next_location: NextLocationInfo
	display_flag: number
}

export interface TrackingInfo {
  sls_tn: string
  client_order_id: string
  receiver_name: string
  records: TrackingRecord[]
}

export interface FulfillmentInfo {
  deliver_type: number
}

export interface TrackingData {
  fulfillment_info: FulfillmentInfo
  sls_tracking_info: TrackingInfo
}

export interface TrackingResponse {
  retcode: number
  data: TrackingData | null
}
