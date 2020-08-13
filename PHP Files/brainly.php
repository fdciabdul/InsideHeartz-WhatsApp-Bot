<?php

function Brainly($q){
	$headers = array();
	$headers[] = 'Content-Type: application/json; charset=utf-8';
	$headers[] = 'user-agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0';
	$formatGraphQl = 'query SearchQuery($query: String!, $first: Int!, $after: ID) {
		questionSearch(query: $query, first: $first, after: $after) {
			edges {
				node {
					content
					attachments{
						url
					}
					answers {
						nodes {
							content
							attachments{
								url
							}
						}
					}
				}
			}
		}
	}
	';
	$count = 2;
	$query = array('operationName' => 'SearchQuery',
		'variables' => [
			'query' => $q,
			'after' => null,
			'first' => 100
		],
		'query' => $formatGraphQl);
	$data = json_encode($query);
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0");
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	curl_setopt_array($curl, [
		CURLOPT_RETURNTRANSFER  => 1,
		CURLOPT_URL		=> 'https://brainly.co.id/graphql/id',
		CURLOPT_POST		=> 1,
		CURLOPT_POSTFIELDS	=> $data
	]);

	$response = curl_exec($curl);
	return $response;
}

header('Content-Type: application/json');
include 'brainly.php';

$query = $_GET['q'];
$result = Brainly($query);
echo $result;

?>
