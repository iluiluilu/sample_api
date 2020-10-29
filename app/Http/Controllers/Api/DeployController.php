<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeployController extends Controller
{
    public function backlog(Request $request)
    {

        $changeType = $request['content']['change_type'];
        $ref = $request['content']['ref'];
        Log::info($changeType . '|' . $ref);
        if ($changeType == 'update' && strpos($ref, 'develop') !== false) {
            $deployScriptPath = base_path() . '/scripts/deploy-dev.sh';
            $output = shell_exec('sh ' . $deployScriptPath);
            Log::info(json_encode($request->all()));
            Log::info($output);
        }
        dd('ok');
    }
}
