import { ApiModelProperty } from '@nestjs/swagger';

import { HttpError } from '@errors/index';
import { BarChartDto } from '@responses/index';

export class FormFactorChartResponseDto{
	
	@ApiModelProperty({required: true, description: 'Flag for success or fail'})
	success: boolean;

	/*@todo - add response body*/
	@ApiModelProperty({
		required: true, 
		description: 'On Success, series data for the Bar Chart. e.g. [{"name": "Chrome", "y": 60}]', 
		default: new BarChartDto('Chrome', 64)
	})
	data: BarChartDto[];

	constructor(data:BarChartDto[]){
		this.success = true;
		this.data = data;
	}	
}

